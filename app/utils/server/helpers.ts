import fs from 'fs'
import path from 'path'

import { imagePath } from '@/app/data/paths'
import { isGif } from '@/app/utils'

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
    const imageExt = /\.(png|jpe?g|gif|webp|svg)$/i
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
