import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../types'

const ProjectCard = ({ project }: { project: Project }) => {
  const { slug, icon, title, www, description, technologies } = project

  const projectTechnologies = technologies.sort((a, b) => a.localeCompare(b)).map(technology => {
    return (
      <li key={technology} className="text-white font-medium bg-gray-400 rounded-sm px-2 py-px">{technology}</li>
    )
  })

  return (

    <Link href={www} key={slug} className='w-full h-full bg-white p-4 rounded-lg shadow-md hover-scale-102'>
      <article className="w-full h-full flex items-center gap-2">
        <div className='flex-none flex flex-col items-center justify-center h-[125px] w-[200px] relative'>
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
        <div className='flex flex-col w-full h-full items-start place-content-between'>
          <div className="flex flex-col items-start justify-start">
            <div className='text-base font-medium text-center'>{title}</div>
            <div className='text-sm text-gray-500'>{description}</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div>{www}</div>
            <ul className="flex flex-wrap text-[12px] gap-1">{projectTechnologies}</ul>
          </div>
        </div>
      </article>
    </Link>

  )
}

export default ProjectCard
