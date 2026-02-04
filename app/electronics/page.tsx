'use client'

import { useSearchParams } from 'next/navigation'

import { electronicsProjects } from '@/data'
import ProjectTile from '@/components/ProjectTile'
import ProjectCard from '@/components/ProjectCard'

const path = '/electronics'

const ElectronicsPage = () => {
  const searchParams = useSearchParams()
  const view = searchParams.get('view') || 'tile'

  const projectList = electronicsProjects.map((project) => {
    const { slug, title, icon, description, technologies } = project
    return view === 'tile' ? (
      <ProjectTile key={slug} path={path} slug={slug} title={title} icon={icon} />
    ) : (
      <ProjectCard key={slug} path={path} slug={slug} title={title} icon={icon} description={description} technologies={technologies} />
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
export default ElectronicsPage
