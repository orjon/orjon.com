import fs from 'fs/promises'
import path from 'path'

import codeImages from '../data/codeImages.json'
import { electronicsProjects } from '../data/index.js'
import { imageSizes, imageQuality, screenMultipliers } from '@/app/constants'
import { dedupeArray } from '@/app/utils'

const BASE_URL =
  process.env.ORIGIN ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  'http://localhost:3000'

const CONCURRENCY = 6

const getCodeImages = (): string[] =>
  Object.values(codeImages).flatMap((entry) => entry.images)

const electronicsProjectSlugs = electronicsProjects.map((p) => p.slug)

async function collectImagesFromFolder(
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

async function collectElectronicsImages(): Promise<string[]> {
  const batches = await Promise.all(
    electronicsProjectSlugs.map((slug) =>
      collectImagesFromFolder(`images/projects/${slug}`)
    )
  )
  return batches.flat()
}

async function processOne(url: string, accept: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: accept
      }
    })
    if (!res.ok) {
      console.error('Pre-processing failed', res.status, url)
      return false
    }
    return true
  } catch (err) {
    console.error('Pre-processing error', url, err)
    return false
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

  const imageWidths = [...imageSizes.base, ...widths]

  for (const src of srcs) {
    for (const multiplier of screenMultipliers) {
      for (const w of imageWidths) {
        urls.push(buildImageUrl(src, w * multiplier, quality))
      }
    }
  }
  return urls
}

async function main() {
  const codeImageSrcs = getCodeImages()
  const electronicsImageSrcs = await collectElectronicsImages()
  const designImageSrcs = await collectImagesFromFolder('images/design')

  const urls: string[] = []

  urls.push(...addImageUrls(codeImageSrcs, imageSizes.codeImages, imageQuality))

  urls.push(
    ...addImageUrls(
      electronicsImageSrcs,
      imageSizes.electronicsImages,
      imageQuality
    )
  )

  urls.push(
    ...addImageUrls(designImageSrcs, imageSizes.designImages, imageQuality)
  )

  const acceptHeaders = [
    'image/avif,image/webp,image/*,*/*',
    'image/webp,image/*,*/*'
  ]

  const totalRequests = urls.length * acceptHeaders.length

  console.log(
    `Pre-processing ${totalRequests} image variants against ${BASE_URL}...`
  )

  let completed = 0
  let failed = 0
  let lastPercentLogged = -1

  let index = 0
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (index < urls.length) {
      const myIndex = index++
      const url = urls[myIndex]
      for (const accept of acceptHeaders) {
        const ok = await processOne(url, accept)
        if (!ok) failed += 1
        completed += 1
        const percent = Math.floor((completed / totalRequests) * 100)
        if (percent !== lastPercentLogged && percent % 5 === 0) {
          console.log(
            `Pre-processing progress: ${percent}% (${completed}/${totalRequests})`
          )
          lastPercentLogged = percent
        }
      }
    }
  })

  await Promise.all(workers)
  const failedPercent =
    totalRequests > 0 ? Math.round((failed / totalRequests) * 100) : 0
  console.log(`Pre-processing progress: 100% (${completed}/${totalRequests})`)
  if (failed > 0) {
    console.log(`Failed: ${failedPercent}% (${failed}/${totalRequests})`)
  }
  console.log('Image pre-processing complete ✅')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
