import Image from 'next/image'
import Link from 'next/link'

import { CodeProject, ElectronicsProject, ImageType } from '@/app/types'
import { getIconPath } from '@/app/utils'
import { imageQuality } from '@/app/constants'

const ProjectTile = ({ project }: { project: CodeProject | ElectronicsProject }) => {

  const { projectType, slug, title } = project

  return (
    <Link
      href={`/${projectType}/${slug}`}
      className='ProjectTile w-full h-full p-4 aspect-square bg-white rounded-2xl shadow-md hover-scale-105 max-w-[300px]'
    >
      <article className='w-full h-full flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center w-3/4 aspect-4/3 relative max-w-[200px]'>
          <Image
            src={getIconPath(ImageType.PROJECT_ICON, slug)}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='200px'
            quality={imageQuality.icon}
          />
        </div>

        <div className='text-base font-medium text-center'>{title}</div>

      </article>
    </Link>


  )
}
export default ProjectTile
