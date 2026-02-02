import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/app/types'

import ProjectSection from '@/app/code/[...project]/ProjectSection'
import ImageCarousel from '@/components/ImageCarousel'
import ProjectTechnologies from '@/app/code/ProjectTechnologies';
import ProjectGitHubLink from '@/app/code/ProjectGitHubLink';
import ProjectLiveLinks from '@/app/code/ProjectLiveLinks';

const ProjectDetails = ({ project }: { project: Project }) => {
  const { slug, icon, title, description, screenshots } = project

  // project.screenshots && console.log(project.screenshots)

  return (
    <div className='ProjectDetails w-full bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 md:gap-6'>
      <article className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-6">

        <div className='flex-none flex flex-col items-start justify-center h-[125px] sm:h-[100px] md:h-[125px] w-[200px] sm:w-[125px] md:w-[200px] mx-auto sm:mx-0 relative'>
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

        <div className="flex w-full flex-col items-start justify-start gap-1 md:gap-2">
          <div className='w-full text-center sm:text-left text-xl sm:text-2xl md:text-3xl font-bold'>{title}</div>
          <div className='text-sm sm:text-base md:text-lg'>{description}</div>
          {screenshots && <ProjectSection title="Screenshots">
            <ImageCarousel images={screenshots} path={slug} />
          </ProjectSection>
          }
          <ProjectSection title="Technologies">
            <ProjectTechnologies project={project} responsive={true} />
          </ProjectSection>
          <ProjectSection title="Code">
            <ProjectGitHubLink project={project} />
          </ProjectSection>
          <ProjectSection title="Preview">
            <ProjectLiveLinks project={project} />
          </ProjectSection>
        </div>

      </article>

    </div>

  )
}

export default ProjectDetails
