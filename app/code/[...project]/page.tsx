
import { codeProjects } from '@/app/data/code'
import { ProjectType } from '@/app/types'

import ProjectsCarousel from '@/app/components/ProjectsCarousel'
import { getProjectImages, isGif } from '@/app/utils/server'


const CodeProjectsPage = () => {

  const projects = codeProjects.map((project) => {
    const images = getProjectImages(project.slug)
    const imageAutoPlay = !(typeof images[0] === 'string' && isGif(images[0]))
    return {
      ...project,
      images,
      imageAutoPlay
    }
  })

  return (
    <ProjectsCarousel section={ProjectType.CODE} projects={projects} />
  )
}

export default CodeProjectsPage
