import Image from 'next/image'

import { DesignProject, ImageType, ProjectType } from '@/app/types'

import Section from '@/app/components/Section'
import Pills from '@/app/components/Pills'
import Paragraphs from '@/app/components/Paragraphs'
import { addBuildVersion, getImagePath } from '@/app/utils'
import { imageQualities } from '@/app/constants'

const sectionGap = 'gap-2 md:gap-3 lg:gap-4'

const DesignProjectDetails = ({ project }: { project: DesignProject }) => {
  const { slug, title, subTitle, scope, software, image, projectType } = project

  const imagePath = addBuildVersion(getImagePath(ImageType.DESIGN_IMAGES, image))

  return (
    <div className='DesignProjectDetails w-full h-full sm:h-auto bg-white sm:p-6 md:p-8 lg:p-10 sm:rounded-2xl sm:shadow-md  flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-[1200px]'>

      <article className={`${slug} flex w-full h-full sm:h-auto flex-col items-start justify-between sm:justify-start ${sectionGap}`}>

        <div className={`DescriptionAndImages flex w-full h-full sm:h-auto flex-col items-start justify-start ${sectionGap}`}>
          <div className='w-full text-center sm:text-left text-2xl md:text-3xl font-bold'>{title}</div>

          {subTitle && <div className='text-sm sm:text-base md:text-lg'> <Paragraphs text={subTitle} /></div>}


          <div className='w-full py-2'>
            <Image
              src={imagePath}
              alt={title}
              width={1000}
              height={600}
              className='w-full h-auto object-contain'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 600px, (max-width: 1024px) 900px, 1120px'
              quality={imageQualities.images}
            />
          </div>

        </div>

        <div className={`TechAndLinks flex w-full flex-col items-start justify-start ${sectionGap}`}>
          <Section title="Project scope">
            <div className='text-sm sm:text-base md:text-lg'>{scope.join(', ')}</div>
          </Section>
          <Section title="Software">
            <Pills data={software} color={projectType as ProjectType} responsive={true} />
          </Section>
        </div>

      </article>
    </div>

  )
}

export default DesignProjectDetails
