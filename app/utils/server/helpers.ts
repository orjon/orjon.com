import fs from 'fs'
import path from 'path'

import { imagePath } from '@/app/data/paths'

export const getProjectImages = (projectSlug: string): string[] => {
  const projectImagePath = `${imagePath.projectImages}/${projectSlug}`

  const dir = path.join(process.cwd(), 'public', projectImagePath)

  try {
    return fs
      .readdirSync(dir)
      .filter((file) => !file.startsWith('.'))
      .filter((file) => /\.(png|jpe?g|gif|webp|svg)$/i.test(file))
      .map((file) => path.join(projectImagePath, file))
      .sort()
  } catch {
    return []
  }
}

export const isGif = (imagePath: string): boolean =>
  imagePath?.toLowerCase().endsWith('.gif')
