'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'

import { ImageType } from '@/app/types'
import { technologyIcons } from '@/app/data'
import { imageQualities } from '@/app/constants'
import { addBuildVersion, getIconPath } from '@/app/utils'
import { TechnologyIcon } from '@/app/types'


const TechnologyIcons = () => {

  const [icons, setIcons] = useState<TechnologyIcon[]>([])

  useEffect(() => {
    setIcons(technologyIcons.sort(() => Math.random() - 0.5))
  }, [])

  const technologyIconList = icons.map((tech) => {
    const icon = addBuildVersion(getIconPath(ImageType.TECHNOLOGY_ICON, tech.icon))
    return (
      <div key={tech.slug} className='TechnologyIcon w-full flex flex-col justify-center items-center'>
        <Image
          src={icon}
          alt={`${tech.label} icon`}
          width={64}
          height={64}
          sizes='64px'
          quality={imageQualities.images}
          className='w-[50px] h-[50px] md:w-[64px] md:h-[64px] mx-auto'
        />
        <p className='text-[11px] font-medium min-h-8 flex justify-center items-center text-center wrap-break-word'>{tech.label}</p>
      </div>
    )
  })

  return (
    <section className='TechnologyIcons w-full mt-2 gap-4 md:gap-6 grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(80px,1fr))]'>
      {technologyIconList}
    </section>
  )
}
export default TechnologyIcons
