'use client'

import { useSearchParams } from 'next/navigation'

import { codeProjects } from '@/app/data/code'

import ProjectTile from '@/app/components/ProjectTile'
import ProjectCard from '@/app/components/ProjectCard'

const CodeClient = () => {
  const searchParams = useSearchParams()
  const view = searchParams.get('view') || 'tile'

  const projectList = codeProjects.map((project) => {
    return view === 'tile' ? (
      <ProjectTile key={project.slug} project={project} />
    ) : (
      <ProjectCard key={project.slug} project={project} />
    )
  })

  const gridCols = view === 'tile' ? 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(225px,1fr))]'
    : 'grid-cols-[repeat(auto-fit,1fr)] md:grid-cols-[repeat(auto-fit,minmax(550px,1fr))]'


  return (
    <section className='CodePage w-full h-full pb-0 overflow-y-auto'>
      <div className='w-full h-full flex flex-col content-1600 p-4 md:p-8'>

        <div className='flex-1 flex items-center pb-4 md:pb-8'>
          <div className={`w-full grid gap-6 md:gap-8 place-items-center ${gridCols}`}>
            {projectList}
          </div>
        </div>
      </div>
    </section>
  )
}
export default CodeClient
