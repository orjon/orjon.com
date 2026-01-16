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

  const minColWidth = view === 'tile' ? '250px' : '500px'

  useEffect(() => {
    console.log(view, minColWidth)
  }, [view, minColWidth])

  return (
    <section>
      {viewLinks}:{view}
      <div className='flex flex-col flex-1 p-2 py-4'>
        <div
          className={`grid gap-x-1 gap-y-6 grid-cols-[repeat(auto-fit,minmax(${minColWidth},1fr))]`}
        >
          {projectList}
        </div>
      </div>
    </section>
  )
}
export default ProjectsView
