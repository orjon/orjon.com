'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { getLocalStorageValue } from '@/app/utils'

import { CURRENT_PROJECT_KEY, projects } from '@/data/code'
import { BiGridAlt, BiCarousel } from "react-icons/bi";
import { TbLayoutList } from "react-icons/tb";


const ProjectViewSelector = () => {

  const router = useRouter()

  const handleCarouselClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const slug = getLocalStorageValue(CURRENT_PROJECT_KEY, projects[0].slug)
    router.push(`/code/${slug}`)
  }

  const linkStyles = 'flex align-center items-center text-2xl px-1 hover:scale-120 duration-150'

  return (
    <div className='absolute z-20 mr-2 right-0 group flex align-center items-center'>
      <Link href="/code?view=tile" className={linkStyles}><BiGridAlt /></Link>
      <Link href="/code?view=card" className={linkStyles}><TbLayoutList /></Link>
      <Link href="/code/project..." className={linkStyles} onClick={handleCarouselClick}>
        <BiCarousel />
      </Link>
    </div>
  )
}
export default ProjectViewSelector


