import fs from 'fs/promises'
import path from 'path'

import { defaultImageRatio } from '@/app/constants/images'
import { codeProjects } from '@/app/data/code'
import { getImageRatio, getProjectImages } from '@/app/utils/server/helpers'

type CodeProjectImagesEntry = {
  images: string[]
  imagesRatio: { w: number; h: number }
}

const OUT_FILE = path.join(process.cwd(), 'app/data/codeImages.json')

async function main() {
  const out: Record<string, CodeProjectImagesEntry> = {}

  for (const project of codeProjects) {
    const images = getProjectImages(project.slug)
    const first = images[0]
    out[project.slug] = {
      images,
      imagesRatio: first ? getImageRatio(first) : defaultImageRatio
    }
  }

  await fs.writeFile(OUT_FILE, `${JSON.stringify(out, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${Object.keys(out).length} projects → ${OUT_FILE}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
