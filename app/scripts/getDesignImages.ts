import fs from 'fs/promises'
import path from 'path'

import { defaultImageRatio } from '@/app/constants/images'
import { designProjects } from '@/app/data/design'
import { getImageRatio } from '@/app/utils/server/helpers'
import { getImagePath } from '@/app/utils'
import { ImageType } from '@/app/types'

type DesignProjectImagesEntry = {
  imagesRatio: { w: number; h: number }
}

const OUT_FILE = path.join(process.cwd(), 'app/data/designImages.json')

async function main() {
  const out: Record<string, DesignProjectImagesEntry> = {}

  for (const project of designProjects) {
    const basePath = getImagePath(ImageType.DESIGN_IMAGES, project.image)
    try {
      out[project.slug] = { imagesRatio: getImageRatio(basePath) }
    } catch {
      console.warn(
        `Missing or unreadable design image: ${basePath} (slug: ${project.slug})`
      )
      out[project.slug] = { imagesRatio: defaultImageRatio }
    }
  }

  await fs.writeFile(OUT_FILE, `${JSON.stringify(out, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${Object.keys(out).length} projects → ${OUT_FILE}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
