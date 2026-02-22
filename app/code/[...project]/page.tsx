
import { codeProjects } from '@/app/data/code'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'
import { getProjectImages } from '@/app/utils/server'


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
