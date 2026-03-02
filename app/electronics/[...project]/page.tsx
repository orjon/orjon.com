import { electronicsProjects } from '@/app/data/electronics'

import { getProjectImages } from '@/app/utils/server/helpers'
import ProjectsCarousel from '@/app/components/ProjectsCarousel'


const ElectronicsProjectsPage = () => {

  const projects = electronicsProjects.map((project) => ({
    ...project,
    images: getProjectImages(project.slug)
  }))

  return (
    <ProjectsCarousel projects={projects} />
  )
}
export default ElectronicsProjectsPage
