import Image from 'next/image'

import { CodeProject } from '@/app/types'

import Section from '@/components/Section'
import ImageCarousel from '@/components/ImageCarousel'
import Pills from '@/components/Pills';
import { PreviewLinks, GitHubLink } from '@/app/code/[...project]/Links';

const CodeProjectDetails = ({ project }: { project: CodeProject }) => {
  const { slug, icon, title, description, screenshots, technologies } = project

  return (
    <div className='CodeProjectDetails w-full bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4 md:gap-6 max-w-[1000px]'>
      <article className={`${slug} flex-1 flex flex-col sm:flex-row gap-2 sm:gap-6`}>

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
          {screenshots && <Section title="Screenshots">
            <ImageCarousel images={screenshots} path={slug} />
          </Section>
          }
          <Section title="Technologies">
            <Pills data={technologies} responsive={true} />
          </Section>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between">
            <Section title="Code">
              <GitHubLink project={project} />
            </Section>
            <Section title="Preview">
              <PreviewLinks project={project} />
            </Section>
          </div>

        </div>

      </article>

    </div>

  )
}

export default CodeProjectDetails
