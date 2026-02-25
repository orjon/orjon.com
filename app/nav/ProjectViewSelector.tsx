'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Image from 'next/image'

import { ProjectType } from '@/app/types'
import { getLocalStorageValue } from '@/app/utils/client'
import { hasProject, getNavIcon } from '@/app/utils'
import { codeProjects, electronicsProjects, designProjects, views } from '@/app/data'

const defaultProject = {
  [ProjectType.CODE]: codeProjects[0].slug,
  [ProjectType.ELECTRONICS]: electronicsProjects[0].slug,
  [ProjectType.DESIGN]: designProjects[0].slug
}

const buttonBaseStyle =
  'bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]'

const buttonStyle =
  'group relative h-[40px] w-[40px] flex items-center align-center justify-center bg-menuButton rounded-[4px] duration-100 ease-out transition-[margin] border border-menuButtonDark'


const ProjectViewSelector = () => {
  const router = useRouter()
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean) || []
  const section = segments[0]
  const disabled = ![ProjectType.CODE, ProjectType.ELECTRONICS, ProjectType.DESIGN].includes(section as ProjectType)

  const isCodePage = section === ProjectType.CODE
  const isDesignPage = section === ProjectType.DESIGN
  const isElectronicsPage = section === ProjectType.ELECTRONICS

  const projectSlug = segments[1] ?? ''
  const isCodeProject = !disabled && projectSlug !== '' && hasProject(codeProjects, projectSlug)
  const isElectronicsProject = !disabled && projectSlug !== '' && hasProject(electronicsProjects, projectSlug)
  const isDesignProject = !disabled && projectSlug !== '' && hasProject(designProjects, projectSlug)

  const searchParams = useSearchParams()
  const view = (isCodeProject || isElectronicsProject || isDesignProject)
    ? 'carousel'
    : searchParams.get('view') ?? 'tile'
  const isCardView = !disabled && view === 'card'
  const isCarouselView = !disabled && view === 'carousel'
  const isTileView = !disabled && !isCardView && !isCarouselView


  const getCarouselHrefFromStorage = (projectType: ProjectType.CODE | ProjectType.ELECTRONICS | ProjectType.DESIGN) =>
    `/${projectType}/${getLocalStorageValue(projectType, defaultProject[projectType])}`


  const [codeCarouselHref, setCodeCarouselHref] = useState(
    `/${ProjectType.CODE}/${defaultProject[ProjectType.CODE]}`
  )
  const [electronicsCarouselHref, setElectronicsCarouselHref] = useState(
    `/${ProjectType.ELECTRONICS}/${defaultProject[ProjectType.ELECTRONICS]}`
  )
  const [designCarouselHref, setDesignCarouselHref] = useState(
    `/${ProjectType.DESIGN}/${defaultProject[ProjectType.DESIGN]}`
  )

  useEffect(() => {
    setCodeCarouselHref(getCarouselHrefFromStorage(ProjectType.CODE))
    setElectronicsCarouselHref(getCarouselHrefFromStorage(ProjectType.ELECTRONICS))
    setDesignCarouselHref(getCarouselHrefFromStorage(ProjectType.DESIGN))
  }, [])


  const handleCarouselMouseEnter = () => {
    if (isCodeProject) {
      setCodeCarouselHref(getCarouselHrefFromStorage(ProjectType.CODE))
    }
    if (isDesignProject) {
      setDesignCarouselHref(getCarouselHrefFromStorage(ProjectType.DESIGN))
    }
    if (isElectronicsProject) {
      setElectronicsCarouselHref(getCarouselHrefFromStorage(ProjectType.ELECTRONICS))
    }
  }

  const handleCarouselClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isCodePage) {
      router.push(getCarouselHrefFromStorage(ProjectType.CODE))
    }
    if (isDesignPage) {
      router.push(getCarouselHrefFromStorage(ProjectType.DESIGN))
    }
    if (isElectronicsPage) {
      router.push(getCarouselHrefFromStorage(ProjectType.ELECTRONICS))
    }
  }

  const carouselHrefs = {
    [ProjectType.CODE]: codeCarouselHref,
    [ProjectType.DESIGN]: designCarouselHref,
    [ProjectType.ELECTRONICS]: electronicsCarouselHref
  }

  const iconStyle = { width: 24, height: 24 }
  const iconClassBase = 'absolute inset-0 size-full object-contain transition-opacity duration-250'
  const iconClassOff = `opacity-100 group-hover:opacity-0`
  const iconClassOn = `opacity-0 group-hover:opacity-100`

  return (
    <div className='ProjectViewSelector flex'>
      <div className={buttonBaseStyle}>
        <Link href={`/${section}?view=tile`} className={`${buttonStyle} ${isTileView ? 'mb-0 mt-1' : 'mb-2 mt-0'} ${disabled || isDesignPage ? 'cursor-not-allowed' : ''}`}>
          <div className='relative size-[24px]'>
            <Image
              src={getNavIcon(views.TILES, false)}
              alt={views.TILES}
              width={30}
              height={30}
              className={`${iconClassBase} ${disabled || isDesignPage ? 'opacity-25' : `${iconClassOff}`}`}
              style={iconStyle}
            />
            <Image
              src={getNavIcon(views.TILES, true)}
              alt={views.TILES}
              width={30}
              height={30}
              className={`${iconClassBase} ${disabled || isDesignPage ? 'hidden' : `${iconClassOn}`} ${isTileView ? 'opacity-100' : ''}`}
              style={iconStyle}
            />
          </div>
        </Link>
      </div>
      <div className={buttonBaseStyle}>
        <Link href={`/${section}?view=card`} className={`${buttonStyle} ${isCardView ? 'mb-0 mt-1' : 'mb-2 mt-0'} ${disabled || isDesignPage ? 'cursor-not-allowed' : ''}`}>
          <div className='relative size-[22px]'>
            <Image
              src={getNavIcon(views.CARDS, false)}
              alt={views.CARDS}
              width={30}
              height={30}
              className={`${iconClassBase} ${disabled || isDesignPage ? 'opacity-25' : `${iconClassOff}`}`}
              style={iconStyle}
            />
            <Image
              src={getNavIcon(views.CARDS, true)}
              alt={views.CARDS}
              width={30}
              height={30}
              className={`${iconClassBase} ${disabled || isDesignPage ? 'hidden' : `${iconClassOn}`} ${isCardView ? 'opacity-100' : ''}`}
              style={iconStyle}
            />
          </div>

        </Link>
      </div>

      <div className={buttonBaseStyle}>
        <Link href={carouselHrefs[section as ProjectType] || ''} className={`${buttonStyle} ${isCarouselView ? 'mb-0 mt-1' : 'mb-2 mt-0'} ${disabled ? 'cursor-not-allowed' : ''}`}
          onMouseEnter={handleCarouselMouseEnter}
          onClick={handleCarouselClick}
        >
          <div className='relative size-[22px]'>
            <Image
              src={getNavIcon(views.CAROUSEL, false)}
              alt={views.CAROUSEL}
              width={30}
              height={30}
              className={`${iconClassBase} ${disabled ? 'opacity-25' : `${iconClassOff}`}`}
              style={iconStyle}
            />
            <Image
              src={getNavIcon(views.CAROUSEL, true)}
              alt={views.CAROUSEL}
              width={30}
              height={30}
              className={`${iconClassBase} ${disabled ? 'hidden' : `${iconClassOn}`} ${isCarouselView ? 'opacity-100' : ''}`}
              style={iconStyle}
            />
          </div>

        </Link>
      </div>

    </div>
  )
}
export default ProjectViewSelector


