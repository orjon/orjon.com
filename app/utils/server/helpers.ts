import fs from 'fs'
import path from 'path'

import { imagePath } from '@/app/data/paths'

export const getProjectImages = (projectSlug: string): string[] => {
  const projectImagePath = `${imagePath.projectImages}/${projectSlug}`

  const dir = path.join(process.cwd(), 'public', projectImagePath)

  try {
    const imageExt = /\.(png|jpe?g|gif|webp|svg)$/i
    const files = fs
      .readdirSync(dir)
      .filter((file) => !file.startsWith('.') && imageExt.test(file))
      .map((file) => path.join(projectImagePath, file))

    const gifs = files
      .filter((file) => file.toLowerCase().endsWith('.gif'))
      .sort()
    const rest = files
      .filter((file) => !file.toLowerCase().endsWith('.gif'))
      .sort()
    return [...gifs, ...rest]
  } catch {
    return []
  }
}

export const isGif = (imagePath: string): boolean =>
  imagePath?.toLowerCase().endsWith('.gif')
