'use client'

import { useSearchParams } from 'next/navigation'

import { electronicsProjects } from '@/app/data'
import { ProjectType } from '@/app/types'

import ProjectTile from '@/app/components/ProjectTile'
import ProjectCard from '@/app/components/ProjectCard'

const path = '/electronics'

const ElectronicsClient = () => {
  const searchParams = useSearchParams()
  const view = searchParams.get('view') || 'tile'

  const projectList = electronicsProjects.map((project) => {
    const { slug, title, description, technologies } = project
    return view === 'tile' ? (
      <ProjectTile key={slug} projectType={ProjectType.ELECTRONICS} slug={slug} title={title} />
    ) : (
      <ProjectCard key={slug} projectType={ProjectType.ELECTRONICS} slug={slug} title={title} description={description} technologies={technologies} />
    )
  })

  const gridCols = view === 'tile' ? 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'
    : 'grid-cols-[repeat(auto-fit,minmax(550px,1fr))]'


  return (
    <section className='ElectronicsPage content-1600 h-full p-4 md:p-8 pb-0 overflow-y-auto'>
      <div className='w-full h-full flex flex-col'>

        <div className='flex-1 flex items-center pb-4 md:pb-8'>
          <div className={`w-full grid gap-6 md:gap-8 place-items-center ${gridCols}`}>
            {projectList}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ElectronicsClient
