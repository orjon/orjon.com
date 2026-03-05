'use client'

import { useSearchParams } from 'next/navigation'

import { CodeProject, ElectronicsProject } from '@/app/types'
import ProjectTile from '@/app/components/ProjectTile'
import ProjectCard from '@/app/components/ProjectCard'

const ProjectGallery = ({ projects }: { projects: (CodeProject | ElectronicsProject)[] }) => {
  const searchParams = useSearchParams()
  const view = searchParams.get('view') || 'tile'

  const projectList = projects.map((project) => {
    return view === 'tile' ? (
      <ProjectTile key={project.slug} project={project} />
    ) : (
      <ProjectCard key={project.slug} project={project} />
    )
  })

  const gridCols = view === 'tile' ? 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(225px,1fr))]'
    : 'grid-cols-[repeat(auto-fit,1fr)] md:grid-cols-[repeat(auto-fit,minmax(550px,1fr))]'


  return (
    <section className='ProjectGallery w-full h-full pb-0 overflow-y-auto'>
      <div className='w-full h-full flex flex-col content-1600 p-6 md:p-10 lg:p-14'>

        <div className='flex-1 flex items-center pb-4 md:pb-8'>
          <div className={`w-full grid gap-6 md:gap-8 lg:gap-10 place-items-center ${gridCols}`}>
            {projectList}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProjectGallery
