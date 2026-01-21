'use client'

import Link from 'next/link'

import { projects } from '@/code'
import ProjectTile from './ProjectTile'
import ProjectCard from './ProjectCard'
import { useState, useEffect } from 'react'

const views = [
  {
    label: 'Tile',
    value: 'tile',
    icon: '/icons/nav/codeOFF.png'
  },
  {
    label: 'Card',
    value: 'card',
    icon: '/icons/nav/codeON.png'
  }
]

const ProjectsView = ({ initialView }: { initialView: string }) => {
  const [view, setView] = useState(initialView)

  const viewLinks = views.map((view) => {
    const { label, value } = view
    return (
      <Link key={label} href={`?view=${value}`} onClick={() => setView(value)}>
        {label}
      </Link>
    )
  })

  const projectList = projects.map((project) => {
    return view === 'tile' ? (
      <ProjectTile key={project.slug} project={project} />
    ) : (
      <ProjectCard key={project.slug} project={project} />
    )
  })

  const gridCols = view === 'tile'? 'gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'
      : 'px-4 gap-6 grid-cols-[repeat(auto-fit,minmax(550px,1fr))]'
  

  useEffect(() => {
    console.log(view)
  }, [view])

  return (
    <section className='code'>
      <div className="flex flex-1">
      {viewLinks}:{view}
      </div> 
      
      <div className='h-full flex flex-col flex-1 p-4'>
        <div
          className={`h-full grid place-items-center ${gridCols}`}
        >
          {projectList}
        </div>
      </div>
    </section>
  )
}
export default ProjectsView
