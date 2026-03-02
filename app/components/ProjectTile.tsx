import Image from 'next/image'
import Link from 'next/link'

import { CodeProject, ElectronicsProject, ImageType } from '@/app/types'
import { addBuildVersion, getIconPath } from '@/app/utils'
import { imageQualities } from '@/app/constants'

const ProjectTile = ({ project }: { project: CodeProject | ElectronicsProject }) => {

  const { projectType, slug, title } = project

  const icon = addBuildVersion(getIconPath(ImageType.PROJECT_ICON, slug))

  return (
    <Link
      href={`/${projectType}/${slug}`}
      className='ProjectTile w-full h-full p-4 aspect-square bg-white rounded-2xl shadow-md hover-scale-105'
    >
      <article className='w-full h-full flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center w-3/4 aspect-4/3 relative'>
          <Image
            src={icon}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='250px'
            quality={imageQualities.images}
          />
        </div>

        <div className='text-base font-medium text-center'>{title}</div>

      </article>
    </Link>


  )
}
export default ProjectTile
