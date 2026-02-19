import { electronicsProjects } from '@/app/data/electronics'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'
import { getProjectImages } from '@/app/utils/server'


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
