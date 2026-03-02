'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { allProjects } from '@/app/data'
import { getNavIcon } from '@/app/utils'


const RandomProject = ({ showLabel = true }: { showLabel?: boolean }) => {
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

  const iconStyle = 'absolute inset-0 size-full object-contain transition-opacity duration-250'

  return (
    <div className='RandomProject flex gap-2'>
      <button
        type='button'
        onClick={handleClick}
        className={`group peer -py-1 cursor-pointer`}
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
          />
          <Image
            src={getNavIcon('random', true)}
            alt='Random project'
            width={30}
            height={30}
            sizes='30px'
            className={`${iconStyle} opacity-0 group-hover:opacity-100`}
            style={{ width: 30, height: 30 }}
          />
        </div>

      </button>
      {showLabel && <div className='hidden md:inline opacity-0 transition-opacity duration-250 peer-hover:opacity-100 select-none'>random</div>}
    </div>
  )
}
export default RandomProject
