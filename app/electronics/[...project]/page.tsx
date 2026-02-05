'use client'


import { electronicsProjects } from '@/data/electronics'
import { sections } from '@/app/types'

import ProjectsCarousel from '@/components/ProjectsCarousel'


const ElectronicsProjectsPage = () => {
  const section = sections.electronics

  return (
    <ProjectsCarousel section={section} projects={electronicsProjects} />
  )
}
export default ElectronicsProjectsPage
