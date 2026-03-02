import fs from 'fs/promises'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

import {
  codeProjects,
  electronicsProjects,
  designProjects
} from '../data/index.js'

import { ProjectImages } from '@/app/types/projects'

const projectTypes = ['code', 'electronics'] as const

const projects = {
  code: codeProjects.map((project) => project.slug),
  electronics: electronicsProjects.map((project) => project.slug),
  design: designProjects.map((project) => project.slug)
} as const

async function main() {
  for (const projectType of projectTypes) {
    const result: ProjectImages = {}

    for (const slug of projects[projectType]) {
      const folder = path.join('public/images/projects', slug)
      // Include png/jpg/webp/gif. GIFs will be kept without a blurred placeholder.
      const files = (await fs.readdir(folder)).filter((file) =>
        /\.(png|jpe?g|webp|gif)$/i.test(file)
      )

      result[slug] = await Promise.all(
        files.map(async (file) => {
          const src = `/images/projects/${slug}/${file}`

          // return { src, blur: null }

          // For GIFs, don't generate a blurred version; keep blur as null.
          if (/\.gif$/i.test(file)) {
            return { src, blur: null }
          }

          try {
            const buffer = await fs.readFile(path.join(folder, file))
            const { base64 } = await getPlaiceholder(buffer)
            return {
              src,
              blur: base64
            }
          } catch (err) {
            console.error(`Skipping unsupported image "${slug}/${file}":`, err)
            return null
          }
        })
      ).then((entries) =>
        entries.filter(
          (e): e is { src: string; blur: string | null } => e !== null
        )
      )
    }

    await fs.writeFile(
      path.join(
        process.cwd(),
        'app',
        'data',
        `blurredImages_${projectType}.json`
      ),
      JSON.stringify(result, null, 2)
    )
    console.log(`${projectType} blurred images generated ✅`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
