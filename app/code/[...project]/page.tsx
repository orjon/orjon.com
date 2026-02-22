
import { codeProjects } from '@/app/data/code'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'
import { getProjectImages } from '@/app/utils/server'


const CodeProjectsPage = () => {

  const projects = codeProjects.map((project) => {
    const images = getProjectImages(project.slug)
    return {
      ...project,
      images
    }
  })

  return (
    <ProjectsCarousel projects={projects} />
  )
}

export default CodeProjectsPage
