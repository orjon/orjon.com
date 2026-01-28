'use client'

import { useSearchParams } from 'next/navigation'

import { projects } from '@/data/code'
import ProjectTile from '@/app/code/ProjectTile'
import ProjectCard from '@/app/code/ProjectCard'


const CodePage = () => {
  const searchParams = useSearchParams()
  const view = searchParams.get('view') || 'tile'

  const projectList = projects.map((project) => {
    return view === 'tile' ? (
      <ProjectTile key={project.slug} project={project} />
    ) : (
      <ProjectCard key={project.slug} project={project} />
    )
  })

  const gridCols = view === 'tile' ? 'gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'
    : 'gap-6 grid-cols-[repeat(auto-fit,minmax(550px,1fr))]'


  return (
    <section className='code content-1600 h-full p-4 md:p-8 pb-0 b-red'>
      <div className='w-full h-full flex flex-col b-blue'>

        <div className='flex-1 flex items-center pb-4 md:pb-8 b-green'>
          <div
            className={`w-full grid place-items-center ${gridCols}`}
          >
            {projectList}
          </div>
        </div>
      </div>
    </section>
  )
}
export default CodePage
