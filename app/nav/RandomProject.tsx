'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { useFirstInteraction } from '@/app/context/FirstInteractionContext'

import { allProjects } from '@/app/data'
import { getNavIcon, getRandomArrayItem } from '@/app/utils'
import { imageQualities } from '../constants/images'

const RandomProject = ({ showLabel = true }: { showLabel?: boolean }) => {
  const pathname = usePathname()
  const router = useRouter()

  const [recentRandomProjects, setRecentRandomProjects] = useState<string[]>([])

  const { hasFirstInteraction } = useFirstInteraction()

  const segments = pathname.split('/').filter(Boolean) || []
  const currentProjectSlug = segments[1] ?? false


  const getRandomProject = () => {
    let randomProject = getRandomArrayItem(allProjects)
    while (recentRandomProjects.includes(randomProject.slug) || randomProject.slug === currentProjectSlug) {
      randomProject = getRandomArrayItem(allProjects)
    }
    setRecentRandomProjects(prev => [...prev, randomProject.slug])

    if (recentRandomProjects.length >= 10) {
      setRecentRandomProjects(recentRandomProjects.slice(1))
    }

    return randomProject
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const randomProject = getRandomProject()
    router.push(`/${randomProject.projectType}/${randomProject.slug}`)
  }

  const iconStyle = 'absolute inset-0 size-full object-contain transition-opacity duration-250'

  return (
    <div className={`RandomProject flex gap-2 opacity-0 transition-opacity duration-2000 ${hasFirstInteraction ? 'opacity-100' : 'pointer-events-none'}`}>
      <button
        type='button'
        onClick={handleClick}
        className={`group peer -py-1 cursor-pointer`}
        disabled={!hasFirstInteraction}
      >
        <div className="relative size-[30px] shrink-0">
          <Image
            src={getNavIcon('random', false)}
            alt='Random project'
            width={30}
            height={30}
            sizes='30px'
            className={`${iconStyle} opacity-100 group-hover:opacity-0`}
            style={{ width: 30, height: 30 }}
            quality={imageQualities.navIcons}
          />
          <Image
            src={getNavIcon('random', true)}
            alt='Random project'
            width={30}
            height={30}
            sizes='30px'
            className={`${iconStyle} opacity-0 group-hover:opacity-100`}
            style={{ width: 30, height: 30 }}
            quality={imageQualities.navIcons}
          />
        </div>

      </button>
      {showLabel && <div className='hidden md:inline opacity-0 transition-opacity duration-250 peer-hover:opacity-100 select-none'>random</div>}
    </div>
  )
}
export default RandomProject
