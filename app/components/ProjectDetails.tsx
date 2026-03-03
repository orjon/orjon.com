import Image from 'next/image'

import { CodeProject, ElectronicsProject, ImageType, ButtonType } from '@/app/types'

import Section from '@/app/components/Section'
import ImageCarousel from '@/app/components/ImageCarousel'
import Pills from '@/app/components/Pills';
import { PreviewLinks, LinkButton } from '@/app/components/Links'
import Paragraphs from '@/app/components/Paragraphs'
import { ProjectType } from '@/app/types/projects'
import { addBuildVersion, getGithubLink, getIconPath } from '@/app/utils'
import { imageQualities } from '@/app/constants'

const ProjectDetails = ({ project, isActive }: { project: CodeProject | ElectronicsProject, isActive: boolean }) => {
  const { slug, title, description, images, technologies, repo, projectType } = project

  const isElectronics = projectType === ProjectType.ELECTRONICS

  const demo = 'demo' in project ? project.demo : false
  const www = 'www' in project ? project.www : false
  const note = 'note' in project ? project.note : false
  const responsive = 'responsive' in project ? project.responsive : false
  const sectionGap = 'gap-2 md:gap-3 lg:gap-4'

  const icon = addBuildVersion(getIconPath(ImageType.PROJECT_ICON, slug))

  return (
    <div className='ProjectDetails w-full h-full sm:h-auto bg-white sm:p-6 md:p-8 lg:p-10 sm:rounded-2xl sm:shadow-md flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-[1200px]'>

      <article className={`${slug} flex-1 h-full lg:h-auto flex flex-col lg:flex-row ${isElectronics ? 'gap-0' : 'gap-1 '} lg:gap-8 `}>

        {!isElectronics &&
          <div className="LeftPanel flex flex-1 flex-col items-start justify-between">

            <div className={`ProjectIcon flex-none flex flex-col items-start justify-center h-[125px] sm:h-[100px] md:h-[125px] w-[200px] sm:w-[125px] md:w-[200px] mx-auto lg:mx-0 relative`}>
              <Image
                src={icon}
                alt={title}
                fill
                className='w-full h-full object-contain'
                sizes='250px'
                quality={imageQualities.images}
              />
            </div>

            <div className={`LinksBlockWide hidden lg:flex w-full flex-col items-start justify-start ${sectionGap}`}>

              <div className={`Links flex w-full flex-col lg:justify-between ${sectionGap}`}>
                <Section title='Code'>
                  <LinkButton type={ButtonType.GITHUB} href={getGithubLink(repo)} />
                </Section>
                {www && (
                  <Section title='Preview'>
                    <PreviewLinks href={www} column={true} responsive={responsive ?? false} />
                  </Section>
                )}
              </div>
            </div>

          </div>
        }

        <div className={`ProjectInformation flex w-full h-full sm:h-auto flex-col items-start justify-between sm:justify-start ${sectionGap}`}>

          <div className={`DescriptionAndImages flex w-full h-full sm:h-auto flex-col items-start justify-start ${sectionGap}`}>

            <div className='w-full text-center sm:text-left text-2xl md:text-3xl font-bold'>{title}</div>

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
              {note && <div className='w-full text-menuButton italic text-right text-xs sm:text-sm md:text-base'>{note}</div>}
            </div>


          </div>


          <div className={`TechAndLinks flex w-full flex-col items-start justify-start ${sectionGap}`}>
            <Section title='Technologies'>
              <Pills data={technologies} color={projectType as ProjectType} responsive={true} />
            </Section>

            <div className={`Links 'flex' ${isElectronics ? '' : 'lg:hidden'} w-full flex-col md:flex-row md:justify-between ${sectionGap}`}>
              <Section title='Code'>
                <LinkButton type={ButtonType.GITHUB} href={getGithubLink(repo)} />
              </Section>
              {www && (
                <Section title='Preview'>
                  <PreviewLinks href={www} column={false} responsive={responsive ?? false} />
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
