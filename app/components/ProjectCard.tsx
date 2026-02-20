import Image from 'next/image'
import Link from 'next/link'

import { CodeProject, ElectronicsProject } from '@/app/types'
import { getIconPath } from '@/app/utils/client'

import Pills from './Pills'

const ProjectCard = ({ project }: { project: CodeProject | ElectronicsProject }) => {

  const { projectType, slug, title, description, technologies } = project

  return (
    <Link
      href={`${projectType}/${slug}`}
      className='ProjectCard w-full h-full bg-white p-4 rounded-2xl shadow-md hover-scale-102'>
      <article className="w-full h-full flex flex-col md:flex-row items-center gap-4">
        <div className='flex-none flex flex-col items-center justify-center h-[125px] w-[200px] relative'>
          <Image
            src={getIconPath(slug)}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='500px'
          />
        </div>
        <div className='flex flex-col w-full h-full items-start place-content-between'>
          <div className="flex flex-col items-start justify-start">
            <div className='text-base font-medium text-center'>{title}</div>
            <div className='text-sm text-gray-500'>{description.top}</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            {/* <div>{www}</div> */}
            <Pills data={technologies} />
          </div>
        </div>
      </article>
    </Link>

  )
}

export default ProjectCard
