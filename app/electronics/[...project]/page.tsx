import { electronicsProjects } from '@/app/data/electronics'
import blurredImagesElectronics from '@/app/data/blurredImages_electronics.json'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'
// import { getProjectImages } from '@/app/utils/server'


const ElectronicsProjectsPage = () => {

  const projects = electronicsProjects.map((project) => ({
    ...project,
    // images: getProjectImages(project.slug),
    images: [...(blurredImagesElectronics[project.slug as keyof typeof blurredImagesElectronics]!)]
  }))

  return (
    <ProjectsCarousel projects={projects} />
  )
}
export default ElectronicsProjectsPage
