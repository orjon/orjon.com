
import { codeProjects } from '@/app/data/code'

import { getProjectImages } from '@/app/utils/server/helpers'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'

const CodeProjectsPage = () => {

  const projects = codeProjects.map((project) => {
    return {
      ...project,
      images: getProjectImages(project.slug)
    }
  })

  return (
    <ProjectsCarousel projects={projects} />
  )
}

export default CodeProjectsPage
