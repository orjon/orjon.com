
import { codeProjects } from '@/app/data/code'
import blurredImagesCode from '@/app/data/blurredImages_code.json'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'
import { getProjectImages } from '@/app/utils/server'


const CodeProjectsPage = () => {

  const projects = codeProjects.map((project) => {
    return {
      ...project,
      // images: getProjectImages(project.slug),
      images: [...(blurredImagesCode[project.slug as keyof typeof blurredImagesCode]!)]
    }
  })

  return (
    <ProjectsCarousel projects={projects} />
  )
}

export default CodeProjectsPage
