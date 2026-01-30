import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/app/types'

import ImageCarousel from '@/components/ImageCarousel'
import ProjectLiveLinks from '../ProjectLiveLinks';
import ProjectTechnologies from '../ProjectTechnologies';


const ProjectDetailsScroll = ({ project }: { project: Project }) => {
  const { icon, title, www, description, screenshots } = project

  // project.screenshots && console.log(project.screenshots)

  return (
    <div className='ProjectDetailsScroll w-full max-h-full bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col'>
      <article className="flex flex-1 gap-4 b-orange overflow-auto">

        <div className='flex-none flex flex-col items-start justify-center h-[125px] w-[200px] relative b-red'>
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

        <div className='flex-1 flex flex-col gap-4 md:gap-6 overflow-auto b-red'>
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
          {/* <div>
            <div className='flex flex-row items-center justify-center gap-2'>
              Preview
              <HiOutlineDeviceMobile className='inline-block text-2xl' />
              <MdOutlineDesktopWindows className='inline-block text-2xl' />
            </div>
          </div> */}
          {/* <div className="w-full h-full">
            <Image src={`/images/code/project4/screenshots/p4ScreenshotClients.jpg`} alt={`Image`} fill className='object-contain' />
          </div> */}

        </div>
      </article>
    </div>

  )
}

export default ProjectDetailsScroll
