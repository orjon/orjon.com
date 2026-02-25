'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { ImageType } from '@/app/types'
import { allProjects } from '@/app/data'
import { addBuildVersion, getIconPath } from '@/app/utils'

const RandomProject = () => {
  const pathname = usePathname()
  const router = useRouter()

  const segments = pathname.split('/').filter(Boolean) || []
  const currentProjectSlug = segments[1] ?? false

  const getRandomProject = () => {
    const projectPool = currentProjectSlug ? allProjects.filter((project) => project.slug !== currentProjectSlug) : allProjects
    return projectPool[Math.floor(Math.random() * projectPool.length)]
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const randomProject = getRandomProject()
    router.push(`/${randomProject.projectType}/${randomProject.slug}`)
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`group flex gap-2`}
    >
      <div className="relative size-[30px] shrink-0">
        <Image
          src={addBuildVersion(getIconPath(ImageType.NAV_ICON, `randomOFF`))}
          alt='Random project'
          width={30}
          height={30}
          className='absolute inset-0 size-full object-contain transition-opacity opacity-100 group-hover:opacity-0'
          style={{ width: 30, height: 30 }}
        />
        <Image
          src={addBuildVersion(getIconPath(ImageType.NAV_ICON, `randomON`))}
          alt='Random project'
          width={30}
          height={30}
          className='absolute inset-0 size-full object-contain transition-opacity opacity-0 group-hover:opacity-100'
          style={{ width: 30, height: 30 }}
        />
      </div>
      <div className='hidden md:inline opacity-0 group-hover:opacity-100'>random</div>
    </button>
  )
}
export default RandomProject
