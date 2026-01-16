import { projects } from '@/code'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../types'

const ProjectCard = ({ project }: { project: Project }) => {
  const { slug, icon, title, www, description } = project
  return (
    <Link href={www} key={slug} className='flex items-center gap-1 p-2 dev'>
      <div className='flex flex-col items-center justify-center h-[125px] w-[200px] relative dev'>
        {icon && (
          <Image
            src={icon}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='500px'
            // quality={100}
          />
        )}
      </div>
      <div className='flex flex-col h-full items-start justify-start dev'>
        <div className='text-base font-medium text-center dev'>{title}</div>
        <div className='text-sm text-gray-500'>{description}</div>
      </div>
    </Link>
  )
}
export default ProjectCard
