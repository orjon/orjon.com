import fs from 'fs/promises'
import path from 'path'

import { codeProjects, electronicsProjects } from '../data/index.js'
import { imageSizes, imageQualities } from '@/app/constants/images'

const BASE_URL =
  process.env.IMAGE_WARM_ORIGIN ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  'http://localhost:3000'


const CONCURRENCY = 6

const projectSlugs = [...codeProjects, ...electronicsProjects].map(
  (p) => p.slug
)

async function collectProjectImages(): Promise<string[]> {
  const result = new Set<string>()

  for (const slug of projectSlugs) {
    const folder = path.join('public/images/projects', slug)
    let files: string[] = []
    try {
      files = (await fs.readdir(folder)).filter((file) =>
        /\.(png|jpe?g|webp)$/i.test(file)
      )
    } catch {
      continue
    }
    for (const file of files) {
      result.add(`/images/projects/${slug}/${file}`)
    }
  }

  return Array.from(result)
}

async function collectNavIcons(): Promise<string[]> {
  const folder = path.join('public/icons/nav')
  try {
    const files = (await fs.readdir(folder)).filter((file) =>
      /\.(png|jpe?g|webp)$/i.test(file)
    )
    return files.map((file) => `/icons/nav/${file}`)
  } catch {
    return []
  }
}

async function warmOne(url: string, accept: string) {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: accept
      }
    })
    if (!res.ok) {
      console.error('Warm failed', res.status, url)
    }
  } catch (err) {
    console.error('Warm error', url, err)
  }
}

async function main() {
  const projectSrcs = await collectProjectImages()
  const iconSrcs = await collectNavIcons()

  const urls: string[] = []

  const buildNextImageUrl = (src: string, width: number, quality: number) => {
    const u = new URL('/_next/image', BASE_URL)
    u.searchParams.set('url', src)
    u.searchParams.set('w', String(width))
    u.searchParams.set('q', String(quality))
    return u.toString()
  }

  // Project images: all configured widths, image quality
  for (const src of projectSrcs) {
    for (const w of imageSizes.projectImage) {
      urls.push(buildNextImageUrl(src, w, imageQualities.images))
    }
  }

  // Nav icons: single small width, icon quality
  for (const src of iconSrcs) {
    urls.push(buildNextImageUrl(src, imageSizes.navIcon, imageQualities.icons))
  }

  console.log(`Warming ${urls.length} image variants against ${BASE_URL}...`)

  // Warm for AVIF and WebP (if enabled in next.config)
  const acceptHeaders = [
    'image/avif,image/webp,image/*,*/*',
    'image/webp,image/*,*/*'
  ]

  const totalRequests = urls.length * acceptHeaders.length
  let completed = 0
  let lastPercentLogged = -1

  let index = 0
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (index < urls.length) {
      const myIndex = index++
      const url = urls[myIndex]
      for (const accept of acceptHeaders) {
        await warmOne(url, accept)
        completed += 1
        const percent = Math.floor((completed / totalRequests) * 100)
        if (percent !== lastPercentLogged && percent % 5 === 0) {
          console.log(`Warm progress: ${percent}% (${completed}/${totalRequests})`)
          lastPercentLogged = percent
        }
      }
    }
  })

  await Promise.all(workers)
  console.log('Image cache warm complete ✅')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
