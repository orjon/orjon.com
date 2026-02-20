import Image from 'next/image'
import Link from 'next/link'

import { CodeProject, ElectronicsProject } from '@/app/types'
import { getIconPath } from '@/app/utils/client'

const ProjectTile = ({ project }: { project: CodeProject | ElectronicsProject }) => {

  const { projectType, slug, title } = project


  return (
    <Link
      href={`/${projectType}/${slug}`}
      className='ProjectTile w-full h-full p-4 aspect-square bg-white rounded-2xl shadow-md hover-scale-105'
    >
      <article className='w-full h-full flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center w-3/4 aspect-4/3 relative'>
          <Image
            src={getIconPath(slug)}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='500px'
          />
        </div>

        <div className='text-base font-medium text-center'>{title}</div>

      </article>
    </Link>


  )
}
export default ProjectTile
