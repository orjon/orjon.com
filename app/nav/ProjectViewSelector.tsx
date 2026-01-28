'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { useCurrentProject } from '@/app/code/CurrentProjectContext'

import { projectViewOptions, CURRENT_PROJECT_KEY } from '@/data/code'


const ProjectViewSelector = () => {

  const { currentProject, setCurrentProject } = useCurrentProject()

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.getItem(CURRENT_PROJECT_KEY) && setCurrentProject(window.localStorage.getItem(CURRENT_PROJECT_KEY)!)
  }, [])


  const viewLinks = projectViewOptions.map((view) => {
    const { value, icon } = view
    let href = value === 'carousel' && currentProject ? `/code/${currentProject}` : view.href
    return (
      <Link
        key={value}
        href={href}
        className='flex align-center items-center text-2xl px-1 hover:scale-120 duration-150'>
        {icon}
      </Link>
    )
  })

  return (
    <div className='absolute z-20 mr-2 right-0 group flex align-center items-center'>{viewLinks}</div>
  )
}
export default ProjectViewSelector
