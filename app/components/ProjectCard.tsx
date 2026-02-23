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
      className='ProjectCard w-full h-full max-w-[1000px] bg-white p-4 sm:p-6 md:p-6 rounded-2xl shadow-md hover-scale-102'>
      <article className="w-full h-full flex flex-col md:flex-row items-center gap-4">
        <div className='flex-none flex flex-col items-center justify-center h-[125px] w-[200px] md:max-w-[25%] relative'>
          <Image
            src={getIconPath(slug)}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='500px'
          />
        </div>
        <div className='flex flex-col w-full h-full items-start place-content-between gap-4'>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className='text-l sm:text-xl md:text-2xl font-bold'>{title}</div>
            <div className='text-sm'>{description.top}</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <Pills data={technologies} />
          </div>
        </div>
      </article>
    </Link>

  )
}

export default ProjectCard
