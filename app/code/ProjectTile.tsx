import { Project } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'

const ProjectTile = ({ project }: { project: Project }) => {
  return (
    <Link
      // href={`/mobile-view/${project.slug}`}
      // href={project.www}
      href={`/code/${project.slug}`}
      key={project.slug}
      className='w-full h-full p-4 aspect-square bg-white rounded-3xl shadow-md hover-scale-105'
    >
      <article className='w-full h-full flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center w-3/4 aspect-4/3 relative'>
          {project.icon && (
            <Image
              src={project.icon}
              alt={project.title}
              fill
              className='w-full h-full object-contain'
              sizes='500px'
            // quality={100}
            />
          )}
        </div>

        <div className='text-base font-medium text-center'>{project.title}</div>

      </article>
    </Link>


  )
}
export default ProjectTile
