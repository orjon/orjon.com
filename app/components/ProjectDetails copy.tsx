import Image from 'next/image'

import { CodeProject, ElectronicsProject } from '@/app/types'

import Section from '@/app/components/Section'
import ImageCarousel from '@/app/components/ImageCarousel'
import Pills from '@/app/components/Pills';
import { PreviewLinks, GitHubLink } from '@/app/components/Links'
import Paragraphs from '@/app/components/Paragraphs'
import { imagePath } from '@/app/data'
import { getGithubLink } from '@/app/utils/client'

const ProjectDetails = ({ project, isActive }: { project: CodeProject | ElectronicsProject, isActive: boolean }) => {
  const { slug, title, description, images, technologies, repo } = project

  const demo = 'demo' in project ? project.demo : false
  const www = 'www' in project ? project.www : false
  const note = 'note' in project ? project.note : false
  const responsive = 'responsive' in project ? project.responsive : false
  const sectionGap = 'gap-2 md:gap-3 lg:gap-4'

  console.log('project:', slug, '( images:', images.length, '| demo:', !!demo, ')')


  return (
    <div className='ProjectDetails w-full h-full sm:h-auto sm:bg-white sm:p-6 md:p-8 lg:p-10 sm:rounded-2xl sm:shadow-md flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-[1200px]'>

      <article className={`${slug} flex-1 h-full md:h-auto flex flex-col gap-1 md:gap-6`}>

        <div className='ProjectIcon flex-none flex flex-col items-start justify-center h-[125px] sm:h-[100px] md:h-[125px] w-[200px] sm:w-[125px] md:w-[200px] mx-auto md:mx-0 relative'>
          <Image
            src={`${imagePath.projectIcon}/${slug}.png`}
            alt={title}
            fill
            className='w-full h-full object-contain'
            sizes='500px'
          />
        </div>

        <div className={`ProjectInformation flex w-full h-full sm:h-auto flex-col items-start justify-between sm:justify-start ${sectionGap}`}>

          <div className={`DescriptionAndImages flex w-full h-full sm:h-auto flex-col items-start justify-start ${sectionGap}`}>

            <div className='w-full text-center sm:text-left text-xl sm:text-2xl md:text-3xl font-bold'>{title}</div>

            <div className={`flex w-full h-auto flex-col items-start justify-evenly sm:justify-start ${sectionGap}`}>
              <div className='text-sm sm:text-base md:text-lg'>
                <Paragraphs text={description.top} />
              </div>


              {(demo || images.length > 0) && (
                <ImageCarousel images={images} demo={demo} isActive={isActive} />
              )}
              {description.bottom && <div className='text-sm sm:text-base md:text-lg'>
                <Paragraphs text={description.bottom} />
              </div>}
              {note && <div className='w-full text-menuButton italic text-xs sm:text-sm md:text-base'>{note}</div>}
            </div>


          </div>


          <div className={`TechAndLinks flex w-full flex-col items-start justify-start ${sectionGap}`}>
            <Section title='Technologies'>
              <Pills data={technologies} responsive={true} />
            </Section>

            <div className={`Links flex w-full flex-col lg:flex-row lg:justify-between ${sectionGap}`}>
              <Section title='Code'>
                <GitHubLink href={getGithubLink(repo)} />
              </Section>
              {www && (
                <Section title='Preview'>
                  <PreviewLinks www={www} responsive={responsive ?? false} />
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
