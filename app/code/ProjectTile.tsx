import { Project } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'

const projecTileStyle = 'flex flex-col items-center justify-center gap-1 p-2'

const ProjectTile = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.www}
      key={project.slug}
      className={`${projecTileStyle}`}
    >
      <div className='flex flex-col items-center justify-center h-[125px] w-full relative'>
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
    </Link>
  )
}
export default ProjectTile
