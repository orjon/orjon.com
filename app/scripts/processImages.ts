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

const buildImageUrl = (src: string, width: number, quality: number) => {
  const u = new URL('/_next/image', BASE_URL)
  u.searchParams.set('url', src)
  u.searchParams.set('w', String(width))
  u.searchParams.set('q', String(quality))
  return u.toString()
}

const addImageUrls = (srcs: string[], widths: number[], quality: number) => {
  const urls: string[] = []

  const uniqueWidths = dedupeArray(widths)

  for (const src of srcs) {
    for (const w of uniqueWidths) {
      urls.push(buildImageUrl(src, w, quality))
    }
  }
  return urls
}

const ACCEPT_HEADERS = [
  'image/avif,image/webp,image/*,*/*',
  'image/webp,image/*,*/*'
]

async function warmUrls(urls: string[], label: string) {
  if (!urls.length) {
    console.log(`Skipping ${label} (no URLs)`)
    return
  }

  const totalRequests = urls.length * ACCEPT_HEADERS.length
  console.log(
    `Warming ${totalRequests} ${label} variants against ${BASE_URL}...`
  )

  let completed = 0
  let lastPercentLogged = -1
  let index = 0

  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (index < urls.length) {
      const myIndex = index++
      const url = urls[myIndex]
      for (const accept of ACCEPT_HEADERS) {
        await warmOne(url, accept)
        completed += 1
        const percent = Math.floor((completed / totalRequests) * 100)
        if (percent !== lastPercentLogged && percent % 5 === 0) {
          console.log(
            `[${label}] Warm progress: ${percent}% (${completed}/${totalRequests})`
          )
          lastPercentLogged = percent
        }
      }
    }
  })

  await Promise.all(workers)
  console.log(`[${label}] Image cache warm complete ✅`)
}

async function main() {
  const projectImageSrcs = await collectProjectImages()
  const designImageSrcs = await collectIconsFromFolder('images/design')
  const navIconSrcs = await collectIconsFromFolder('icons/nav')
  const projectIconSrcs = await collectIconsFromFolder('icons/projects')
  const techIconSrcs = await collectIconsFromFolder('icons/technology')

  await warmUrls(
    addImageUrls(
      projectImageSrcs,
      [...imageSizes.projectImage, ...imageSizes.designImage],
      imageQualities.images
    ),
    'project images'
  )

  await warmUrls(
    addImageUrls(
      designImageSrcs,
      [...imageSizes.projectImage, ...imageSizes.designImage],
      imageQualities.images
    ),
    'design images'
  )

  await warmUrls(
    addImageUrls(navIconSrcs, imageSizes.navIcon, imageQualities.navIcons),
    'nav icons'
  )

  await warmUrls(
    addImageUrls(projectIconSrcs, imageSizes.projectIcon, imageQualities.images),
    'project icons'
  )

  await warmUrls(
    addImageUrls(techIconSrcs, imageSizes.techIcons, imageQualities.images),
    'technology icons'
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
