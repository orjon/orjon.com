'use client'

import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { ImageType } from '@/app/types'
import { technologyIcons } from '@/app/data'
import { getIconPath } from '@/app/utils'
import { shuffleArray, swapWithRandom } from '@/app/utils/client'
import { TechnologyIcon } from '@/app/types'
import { imageQuality } from '@/app/constants'


const TechnologyIcons = () => {
  const [icons, setIcons] = useState<TechnologyIcon[]>([])
  const clickCountRef = useRef(0)
  const autoShuffleDoneRef = useRef(false)

  useEffect(() => {
    setIcons(shuffleArray(technologyIcons))
  }, [])

  // After initial icons are loaded, shuffle one random pair once after 3s
  useEffect(() => {
    if (autoShuffleDoneRef.current || icons.length < 2) return

    autoShuffleDoneRef.current = true
    const timeoutId = setTimeout(() => {
      setIcons((prev) => {
        if (prev.length < 2) return prev
        const index = Math.floor(Math.random() * prev.length)
        return swapWithRandom(prev, index)
      })
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [icons.length])

  const handleClick = (index: number) => {
    setIcons((prev) => {
      if (prev.length < 2) return prev

      let next = swapWithRandom(prev, index)

      // every 5th click, fully shuffle all icons
      clickCountRef.current += 1
      if (clickCountRef.current % 5 === 0) {
        next = shuffleArray(next)
      }

      return next
    })
  }

  const technologyIconList = icons.map((tech, index) => {

    return (
      <motion.button

        key={tech.slug}
        type='button'
        layout
        onClick={() => handleClick(index)}
        className='TechnologyIcon w-full flex flex-col justify-center items-center cursor-pointer'
      >
        <Image
          src={getIconPath(ImageType.TECHNOLOGY_ICON, tech.icon)}
          alt={`${tech.label} icon`}
          width={64}
          height={64}
          sizes='64px'
          quality={imageQuality.icon}
          className='w-[50px] h-[50px] md:w-[64px] md:h-[64px] mx-auto'
        />
        <p className='text-[11px] font-medium min-h-8 flex justify-center items-center text-center wrap-break-word'>
          {tech.label}
        </p>
      </motion.button>
    )
  })

  return (
    <section className='TechnologyIcons w-full mt-2'>
      <motion.div
        layout
        className='gap-4 md:gap-6 grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(80px,1fr))]'
      >
        {technologyIconList}
      </motion.div>
    </section>
  )
}

export default TechnologyIcons
