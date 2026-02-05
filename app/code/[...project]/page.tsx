import { codeProjects } from '@/data/code'
import { sections } from '@/app/types'

import ProjectsCarousel from '@/components/ProjectsCarousel'


const CodeProjectsPage = () => {

  const section = sections.code

  return (
    <ProjectsCarousel section={section} projects={codeProjects} />
  )
}
export default CodeProjectsPage
