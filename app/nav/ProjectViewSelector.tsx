'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Image from 'next/image'

import { ImageType, ProjectType } from '@/app/types'
import { getLocalStorageValue } from '@/app/utils/client'
import { hasProject, addBuildVersion, getIconPath } from '@/app/utils'
import { codeProjects, electronicsProjects, designProjects, views } from '@/app/data'

const defaultProject = {
  [ProjectType.CODE]: codeProjects[0].slug,
  [ProjectType.ELECTRONICS]: electronicsProjects[0].slug,
  [ProjectType.DESIGN]: designProjects[0].slug
}

const buttonBaseStyle =
  'group bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]'

const buttonStyle =
  'group block h-[40px] w-[40px] flex items-center align-center justify-center py-1 bg-menuButton rounded-[4px] duration-100 ease-out transition-[margin] border border-menuButtonDark'


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

  const iconStyle = { width: 22, height: 22 }
  const iconClass = 'transition-opacity duration-250'

  const tilesIconOff = addBuildVersion(getIconPath(ImageType.NAV_ICON, `${views.TILES}OFF`))
  const tilesIconOn = addBuildVersion(getIconPath(ImageType.NAV_ICON, `${views.TILES}ON`))
  const cardsIconOff = addBuildVersion(getIconPath(ImageType.NAV_ICON, `${views.CARDS}OFF`))
  const cardsIconOn = addBuildVersion(getIconPath(ImageType.NAV_ICON, `${views.CARDS}ON`))
  const carouselIconOff = addBuildVersion(getIconPath(ImageType.NAV_ICON, `${views.CAROUSEL}OFF`))
  const carouselIconOn = addBuildVersion(getIconPath(ImageType.NAV_ICON, `${views.CAROUSEL}ON`))

  return (
    <div className='ProjectViewSelector flex'>
      <div className={buttonBaseStyle}>
        <Link href={`/${section}?view=tile`} className={`relative z-10 ${buttonStyle} px-2 ${isTileView ? 'mb-0 mt-1' : 'mb-2 mt-0'} ${disabled || isDesignPage ? 'cursor-not-allowed' : ''}`}>
          <Image
            src={`${isTileView ? tilesIconOn : tilesIconOff}`}
            alt={views.TILES}
            width={30}
            height={30}
            className={`${iconClass} ${disabled || isDesignPage ? 'opacity-25' : ''}`}
            style={iconStyle}
          />
        </Link>
      </div>
      <div className={buttonBaseStyle}>
        <Link href={`/${section}?view=card`} className={`relative z-10 ${buttonStyle} px-2 ${isCardView ? 'mb-0 mt-1' : 'mb-2 mt-0'} ${disabled || isDesignPage ? 'cursor-not-allowed' : ''}`}>
          <Image
            src={`${isCardView ? cardsIconOn : cardsIconOff}`}
            alt={views.CARDS}
            width={30}
            height={30}
            className={`${iconClass} ${disabled || isDesignPage ? 'opacity-25' : ''}`}
            style={iconStyle}
          />
        </Link>
      </div>

      <div className={buttonBaseStyle}>
        <Link href={carouselHrefs[section as ProjectType] || ''} className={`relative z-10 ${buttonStyle} px-2 ${isCarouselView ? 'mb-0 mt-1' : 'mb-2 mt-0'} ${disabled ? 'cursor-not-allowed' : ''}`}
          onMouseEnter={handleCarouselMouseEnter}
          onClick={handleCarouselClick}
        >
          <Image
            src={`${isCarouselView ? carouselIconOn : carouselIconOff}`}
            alt={views.CAROUSEL}
            width={30}
            height={30}
            className={`${iconClass} ${disabled ? 'opacity-25' : ''}`}
            style={iconStyle}
          />
        </Link>
      </div>

    </div>
  )
}
export default ProjectViewSelector


