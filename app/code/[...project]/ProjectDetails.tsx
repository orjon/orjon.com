import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/app/types'

import ImageCarousel from '@/components/ImageCarousel'
import ProjectLiveLinks from '../ProjectLiveLinks';
import ProjectTechnologies from '../ProjectTechnologies';

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const ProjectDetails = ({ project, index, total, goToPrev, goToNext }: { project: Project, index: number, total: number, goToPrev: () => void, goToNext: () => void }) => {
  const { icon, title, www, description, screenshots } = project

  // project.screenshots && console.log(project.screenshots)

  return (
    <div className='ProjectDetails w-full bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-4 md:gap-6'>
      <article className="flex flex-1 gap-4 md:gap-6">

        <div className='flex-none flex flex-col items-start justify-center h-[125px] w-[200px] relative'>
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

        <div className='flex-1 flex flex-col gap-4 md:gap-6'>
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <div className='text-xl md:text-3xl font-bold text-center'>{title}</div>
            <div className='text-sm md:text-lg '>{description}</div>
            <div className='text-lg md:text-xl font-medium'>Screenshots</div>
            {screenshots && <ImageCarousel images={screenshots} />}
            <div className='text-lg md:text-xl font-medium'>Preview</div>
            <ProjectLiveLinks project={project} />
            <div className='text-lg md:text-xl font-medium'>Technologies</div>
            <ProjectTechnologies project={project} large={true} />
          </div>

        </div>
      </article>
      <div className="w-full group flex align-center user-select-none justify-between gap-8 text-menuText font-medium">
        <div
          onClick={goToPrev}
          className='embla__prev flex flex-1 cursor-pointer text-2xl p-2 justify-center hover-scale-120'><FaArrowLeftLong /></div>
        <div className='text-2xl'>{index + 1}<span className='text-menuButton'> | </span>{total}</div>
        <div
          onClick={goToNext}
          className='embla__next flex flex-1 cursor-pointer text-2xl p-2 justify-center hover-scale-120'><FaArrowRightLong /></div>
      </div>
    </div>

  )
}

export default ProjectDetails
