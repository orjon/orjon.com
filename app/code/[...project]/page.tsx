
import { codeProjects } from '@/app/data/code'

import { getImageRatio, getProjectImages } from '@/app/utils/server/helpers'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'

const CodeProjectsPage = () => {

  const projects = codeProjects.map((project) => {
    const images = getProjectImages(project.slug)
    return {
      ...project,
      images,
      imagesRatio: getImageRatio(images[0])
    }
  })

  projects.forEach((project) => {
    console.log(project.imagesRatio)
  })

  return (
    <ProjectsCarousel projects={projects} />
  )
}

export default CodeProjectsPage
