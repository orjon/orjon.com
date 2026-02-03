'use client'

import { useSearchParams } from 'next/navigation'

import { codeProjects } from '@/data/code'
import CodeTile from '@/app/code/CodeTile'
import CodeCard from '@/app/code/CodeCard'


const CodePage = () => {
  const searchParams = useSearchParams()
  const view = searchParams.get('view') || 'tile'

  const projectList = codeProjects.map((project) => {
    return view === 'tile' ? (
      <CodeTile key={project.slug} project={project} />
    ) : (
      <CodeCard key={project.slug} project={project} />
    )
  })

  const gridCols = view === 'tile' ? 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'
    : 'grid-cols-[repeat(auto-fit,minmax(550px,1fr))]'


  return (
    <section className='code content-1600 h-full p-4 md:p-8 pb-0 overflow-y-auto'>
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
export default CodePage
