import fs from 'fs'
import path from 'path'

import { imageSize } from 'image-size'

import { imagePath } from '@/app/data/paths'
import { isGif } from '@/app/utils'

const DEFAULT_RATIO = { w: 16, h: 9 }

function resolveFilePath(filePath: string): string {
  if (filePath.startsWith('/') && !fs.existsSync(filePath)) {
    return path.join(process.cwd(), 'public', filePath)
  }
  return path.normalize(filePath)
}

export const getProjectImages = (projectSlug: string): string[] => {
  const projectImagePath = `${imagePath.projectImages}/${projectSlug}`

  const dir = path.join(
    process.cwd(),
    'public',
    'images',
    'projects',
    projectSlug
  )

  try {
    const imageExt = /\.(png|jpe?g|gif|webp)$/i
    const files = fs
      .readdirSync(dir)
      .filter((file) => !file.startsWith('.') && imageExt.test(file))
      .map((file) => path.join(projectImagePath, file))
      .sort()

    const gifs = files.filter((file) => isGif(file))
    const rest = files.filter((file) => !isGif(file))

    return [...gifs, ...rest]
  } catch {
    return []
  }
}

export const getImageRatio = (imagePath: string): { w: number; h: number } => {
  const resolved = resolveFilePath(imagePath)
  const buffer = fs.readFileSync(resolved)
  const dimensions = imageSize(buffer)
  if (dimensions.width && dimensions.height) {
    return { w: dimensions.width, h: dimensions.height }
  }
  return DEFAULT_RATIO
}
