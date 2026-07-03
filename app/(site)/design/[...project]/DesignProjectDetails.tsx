import Image from 'next/image'


import { defaultImageRatio, imageQuality } from '@/app/constants'
import { DesignProject, ImageType, ProjectType, ButtonType } from '@/app/types'

import Section from '@/app/components/Section'
import Pills from '@/app/components/Pills'
import { Summary } from '@/app/components/Texts'
import { getImagePath } from '@/app/utils'
import { LinkButton } from '@/app/components/Links'

import designImages from '@/app/data/designImages.json'

const sectionGap = 'gap-2 md:gap-3 lg:gap-4'

const DesignProjectDetails = ({ project }: { project: DesignProject }) => {
  const { slug, title, subTitle, scope, software, image, projectType } = project

  const mapUrl = 'mapUrl' in project ? project.mapUrl : false

  const imageRatio =
    designImages[slug as keyof typeof designImages]?.imagesRatio ??
    defaultImageRatio


  return (
    <div className='DesignProjectDetails w-full h-full sm:h-auto bg-white sm:p-6 md:p-8 lg:p-10 sm:rounded-2xl sm:shadow-md  flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-[1200px]'>

      <article className={`${slug} flex w-full h-full sm:h-auto flex-col items-start justify-between sm:justify-start ${sectionGap}`}>

        <div className={`DescriptionAndImages flex w-full h-full sm:h-auto flex-col items-start justify-start ${sectionGap}`}>
          <div className='w-full text-center sm:text-left text-2xl md:text-3xl font-bold'>{title}</div>

          {subTitle && <Summary text={subTitle} />}

          <div className='w-full py-2'>
            <Image
              src={getImagePath(ImageType.DESIGN_IMAGES, image)}
              alt={title}
              width={imageRatio.w}
              height={imageRatio.h}
              className='w-full h-auto object-contain'
              sizes='(max-width: 639px) calc(100vw * 591/639), (max-width: 767px) calc(100vw * 607/767), (max-width: 1023px) calc(100vw * 847/1023), (max-width: 1323px) calc(100vw * 1120/1323), 1120px'
              quality={imageQuality.image}
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
          {mapUrl && (
            <Section title='Location'>
              <LinkButton type={ButtonType.MAP} href={mapUrl} />
            </Section>
          )}
        </div>

      </article>
    </div>

  )
}

export default DesignProjectDetails
