import Image from 'next/image'

import { CodeProject, ElectronicsProject, ProjectType } from '@/app/types'

import Section from '@/app/components/Section'
import ImageCarousel from '@/app/components/ImageCarousel'
import Pills from '@/app/components/Pills';
import { PreviewLinks, GitHubLink } from '@/app/components/Links'
import { imagePath } from '@/app/data/paths'

const ProjectDetails = ({ section, project }: { section: string, project: CodeProject | ElectronicsProject }) => {
  const { slug, title, description, images, technologies, github } = project

  let demo

  if ('demo' in project) {
    demo = project.demo
  }

  return (
    <div className='ProjectDetails w-full h-full sm:h-auto sm:bg-white sm:p-6 sm:rounded-2xl sm:shadow-md flex flex-col gap-4 md:gap-6 max-w-[1000px]'>
      {/* // <div className='CodeProjectDetails w-full bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4 md:gap-6 max-w-[1000px]'> */}
      <article className={`${slug} flex-1 h-full sm:h-auto flex flex-col sm:flex-row gap-1 sm:gap-6`}>

        {/* <div className='flex-none flex flex-col items-start justify-center h-[125px] sm:h-[100px] md:h-[125px] w-[200px] sm:w-[125px] md:w-[200px] mx-auto sm:mx-0 relative'> */}
        <div className='flex-none flex flex-col items-start justify-center h-[125px] sm:h-[100px] md:h-[125px] w-[200px] sm:w-[125px] md:w-[200px] mx-auto sm:mx-0 relative'>
          <Image
            src={`${imagePath.projectIcon}/${slug}.png`}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='500px'
          // quality={100}
          />
        </div>

        <div className="flex w-full h-full sm:h-auto flex-col items-start justify-between sm:justify-start gap-1 md:gap-2">
          <div className="flex w-full h-full sm:h-auto flex-col items-start justify-start gap-1 md:gap-2">
            <div className='w-full text-center sm:text-left text-xl sm:text-2xl md:text-3xl font-bold'>{title}</div>

            <div className="flex w-full h-full sm:h-auto flex-col items-start justify-evenly sm:justify-start gap-1 md:gap-2">
              <div className='text-sm sm:text-base md:text-lg'>{description}</div>
              {demo && <iframe
                src={demo}
                className="w-full aspect-video border-0 rounded-lg"
              />}
              {images && (
                <Section>
                  <ImageCarousel images={images} shadow={section === ProjectType.CODE ? true : false} />
                </Section>
              )}
            </div>


          </div>

          <div className="flex w-full flex-col items-start justify-start gap-1 md:gap-2">
            <Section title="Technologies">
              <Pills data={technologies} responsive={true} />
            </Section>
            <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-1 md:gap-2">
              <Section title="Code">
                <GitHubLink href={github} />
              </Section>
              {'www' in project && (
                <Section title="Preview">
                  <PreviewLinks www={project.www} responsive={project.responsive ?? false} />
                </Section>
              )}
            </div>
          </div>
        </div>

      </article>

    </div>

  )
}

export default ProjectDetails
