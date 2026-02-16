import { Image } from '@/app/components/Image'

import { CodeProject, ElectronicsProject, ProjectType } from '@/app/types'

import Section from '@/app/components/Section'
import ImageCarousel from '@/app/components/ImageCarousel'
import Pills from '@/app/components/Pills';
import { PreviewLinks, GitHubLink } from '@/app/components/Links'
import Paragraphs from '@/app/components/Paragraphs'
import { imagePath } from '@/app/data/paths'

const ProjectDetails = ({ section, project }: { section: string, project: CodeProject | ElectronicsProject }) => {
  const { slug, title, description, images, imageAutoPlay, technologies, github } = project

  const demo = 'demo' in project ? project.demo : undefined
  const www = 'www' in project ? project.www : undefined
  const responsive = 'responsive' in project ? project.responsive : undefined
  let imageSectionTitle = section === ProjectType.CODE
    ? (images && images.length > 1 ? 'Screenshots' : 'Screenshot')
    : (images && images.length > 1 ? 'Images' : 'Image')

  const sectionGap = 'gap-2 md:gap-3 lg:gap-4'

  return (
    <div className='ProjectDetails w-full h-full sm:h-auto sm:bg-white sm:p-6 md:p-8 lg:p-10 sm:rounded-2xl sm:shadow-md flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-[1200px]'>

      <article className={`${slug} flex-1 h-full sm:h-auto flex flex-col sm:flex-row gap-1 sm:gap-6`}>

        <div className='ProjectIcon flex-none flex flex-col items-start justify-center h-[125px] sm:h-[100px] md:h-[125px] w-[200px] sm:w-[125px] md:w-[200px] mx-auto sm:mx-0 relative'>
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
                <Paragraphs text={description} />
              </div>
              {demo && <iframe
                src={demo}
                className="w-full aspect-video border-0 rounded-lg"
              />}
              {images && images.length > 0 && (
                <Section title={imageSectionTitle}>
                  <ImageCarousel images={images} autoPlay={imageAutoPlay} hasBorder={section === ProjectType.CODE ? true : false} />
                </Section>
              )}
            </div>


          </div>


          <div className={`TechAndLinks flex w-full flex-col items-start justify-start ${sectionGap}`}>
            <Section title='Technologies'>
              <Pills data={technologies} responsive={true} />
            </Section>

            <div className={`Links flex w-full flex-col lg:flex-row lg:justify-between ${sectionGap}`}>
              <Section title='Code'>
                <GitHubLink href={github} />
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
