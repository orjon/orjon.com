import ProjectsCarousel from '@/app/components/ProjectsCarousel'

import { codeProjects } from '@/app/data/code'
import codeImages from '@/app/data/codeImages.json'
import { defaultImageRatio } from '@/app/constants/images'

const CodeProjectsPage = () => {

  const projects = codeProjects.map((project) => {
    const entry =
      codeImages[project.slug as keyof typeof codeImages]
    return {
      ...project,
      images: entry?.images ?? [],
      imagesRatio: entry?.imagesRatio ?? defaultImageRatio,
    }
  })

  return (
    <ProjectsCarousel projects={projects} />
  )
}

export default CodeProjectsPage
