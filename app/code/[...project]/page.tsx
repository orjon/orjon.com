
import { codeProjects } from '@/app/data/code'
import { ProjectType } from '@/app/types'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'
import { getProjectImages } from '@/app/utils/server'


const CodeProjectsPage = () => {

  const projects = codeProjects.map((project) => ({
    ...project,
    images: getProjectImages(project.slug)
  }))

  return (
    <ProjectsCarousel section={ProjectType.CODE} projects={projects} />
  )
}

export default CodeProjectsPage
