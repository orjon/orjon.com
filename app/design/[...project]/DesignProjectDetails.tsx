import Image from 'next/image'

import { DesignProject } from '@/app/types'

import Section from '@/components/Section'
import Pills from '@/components/Pills'


const DesignProjectDetails = ({ project }: { project: DesignProject }) => {
  const { slug, title, subTitle, scope, software, image } = project

  return (
    <div className='DesignProjectDetails w-full bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4 md:gap-6 max-w-[1000px]'>
      <article className={`${slug} flex w-full flex-col gap-1 md:gap-2`}>

        <div className='w-full text-center sm:text-left text-xl sm:text-2xl md:text-3xl font-bold'>{title}</div>
        {subTitle && <div className='text-sm sm:text-base md:text-lg'>{subTitle}</div>}
        <div className='w-full relative'>
          <Image
            src={image}
            alt={title}
            width={1000}
            height={600}
            className='w-full h-auto object-contain'
            sizes='(max-width: 1000px) 100vw, 1000px'
          />
        </div>
        <Section title="Project scope">
          <div className='text-sm sm:text-base md:text-lg'>{scope}</div>
        </Section>
        <Section title="Software">
          <Pills data={software} responsive={true} />
          {/* <div className='text-sm sm:text-base md:text-lg'>{software}</div> */}
        </Section>

      </article>
    </div>

  )
}

export default DesignProjectDetails
