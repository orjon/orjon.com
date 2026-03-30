import { electronicsProjects } from '@/app/data/electronics'

import { getImageRatio, getProjectImages } from '@/app/utils/server/helpers'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'


const ElectronicsProjectsPage = () => {

  const projects = electronicsProjects.map((project) => {
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
export default ElectronicsProjectsPage
