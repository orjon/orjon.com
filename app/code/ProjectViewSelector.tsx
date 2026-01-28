'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { projectViewOptions, CURRENT_PROJECT_KEY } from '@/data/code'



const ProjectViewSelector = ({ setView }: { setView: (view: string) => void }) => {

  const [carouselHref, setCarouselHref] = useState(projectViewOptions.find(view => view.value === 'carousel')?.href)


  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.getItem(CURRENT_PROJECT_KEY) && setCarouselHref(`/code/${window.localStorage.getItem(CURRENT_PROJECT_KEY)}`)
  }, [])


  const viewLinks = projectViewOptions.map((view) => {
    const { value, icon } = view
    let href = value === 'carousel' && carouselHref ? carouselHref : view.href

    return (
      <Link
        key={value}
        className='flex align-center items-center text-2xl px-1 hover:scale-120 duration-150'
        href={href}
        onClick={() => setView(value)}>
        {icon}
      </Link>
    )
  })

  return (
    <div className="w-full group flex align-center justify-between text-menuText bg-white shadow-md p-2 rounded-lg mb-4 md:mb-8">
      <div className='font-medium text-lg'>Projects</div>
      <div className='group flex align-center items-center'>{viewLinks}</div>
    </div>
  )
}
export default ProjectViewSelector
