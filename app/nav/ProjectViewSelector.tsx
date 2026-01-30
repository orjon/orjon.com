'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { getLocalStorageValue } from '@/app/utils'

import { CURRENT_PROJECT_KEY, projects } from '@/data/code'
import { BiGridAlt, BiCarousel } from "react-icons/bi";
import { TbLayoutList } from "react-icons/tb";

const defaultProject = projects[0].slug


const ProjectViewSelector = () => {
  const router = useRouter()

  const getCarouselHref = () => `/code/${getLocalStorageValue(CURRENT_PROJECT_KEY, defaultProject)}`

  const [carouselHref, setCarouselHref] = useState(`/code/${defaultProject}`)

  useEffect(() => setCarouselHref(getCarouselHref()), [])

  const handleCarouselMouseEnter = () => setCarouselHref(getCarouselHref())

  const handleCarouselClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(getCarouselHref())
  }

  const linkStyle = 'flex align-center items-center text-2xl px-1 hover:scale-120 duration-150'

  return (
    <div className='absolute z-20 mr-2 right-0 group flex align-center items-center'>
      <Link href="/code?view=tile" className={linkStyle}><BiGridAlt /></Link>
      <Link href="/code?view=card" className={linkStyle}><TbLayoutList /></Link>
      <Link
        href={carouselHref}
        className={linkStyle}
        onMouseEnter={handleCarouselMouseEnter}
        onClick={handleCarouselClick}
      >
        <BiCarousel />
      </Link>
    </div>
  )
}
export default ProjectViewSelector


