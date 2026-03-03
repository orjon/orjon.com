import fs from 'fs/promises'
import path from 'path'

import { codeProjects, electronicsProjects } from '../data/index.js'
import { imageSizes, imageQualities } from '@/app/constants'
import { dedupeArray } from '@/app/utils'

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

async function collectIconsFromFolder(
  relativeFolder: string
): Promise<string[]> {
  const folder = path.join('public', relativeFolder)
  try {
    const files = (await fs.readdir(folder)).filter((file) =>
      /\.(png|jpe?g|webp)$/i.test(file)
    )
    return files.map((file) => `/${relativeFolder}/${file}`)
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

const buildNextImageUrl = (src: string, width: number, quality: number) => {
  const u = new URL('/_next/image', BASE_URL)
  u.searchParams.set('url', src)
  u.searchParams.set('w', String(width))
  u.searchParams.set('q', String(quality))
  return u.toString()
}

const addImageUrls = (srcs: string[], widths: number[], quality: number) => {
  const urls: string[] = []

  for (const src of srcs) {
    for (const w of dedupeArray(widths)) {
      urls.push(buildNextImageUrl(src, w, quality))
    }
  }
  return urls
}

async function main() {
  const projectImageSrcs = await collectProjectImages()
  const designImageSrcs = await collectIconsFromFolder('images/design')
  const navIconSrcs = await collectIconsFromFolder('icons/nav')
  const projectIconSrcs = await collectIconsFromFolder('icons/projects')
  const techIconSrcs = await collectIconsFromFolder('icons/technology')

  const urls: string[] = []

  urls.push(
    ...addImageUrls(
      projectImageSrcs,
      imageSizes.projectImage,
      imageQualities.images
    )
  )
  urls.push(
    ...addImageUrls(
      designImageSrcs,
      imageSizes.designImage,
      imageQualities.images
    )
  )
  urls.push(
    ...addImageUrls(navIconSrcs, imageSizes.navIcon, imageQualities.navIcons)
  )
  urls.push(
    ...addImageUrls(
      projectIconSrcs,
      imageSizes.projectIcon,
      imageQualities.images
    )
  )
  urls.push(
    ...addImageUrls(techIconSrcs, imageSizes.techIcons, imageQualities.images)
  )

  const acceptHeaders = [
    'image/avif,image/webp,image/*,*/*',
    'image/webp,image/*,*/*'
  ]

  const totalRequests = urls.length * acceptHeaders.length

  console.log(`Warming ${totalRequests} image variants against ${BASE_URL}...`)

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
          console.log(
            `Warm progress: ${percent}% (${completed}/${totalRequests})`
          )
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
