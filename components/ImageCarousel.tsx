'use client'

import { useCallback, useEffect, useState } from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import { SCREENSHOT_PATH } from '@/data/code'
import Image from 'next/image'

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30, skipSnaps: false, watchDrag: false }

export const ImageCarousel = ({ path, images, options }: { path: string, images: string[], options?: EmblaOptionsType }) => {

  const [emblaImageRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade(), Autoplay({ delay: 5000 })])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const screenshotPath = `${SCREENSHOT_PATH}/${path}`

  const slides = images.map((image, index) => {
    return (
      <div key={index} className='embla__slide flex-[0_0_100%] cursor-w-resize px-1 pb-4'>
        <Image src={`${screenshotPath}/${image}`} alt={`Image ${index}`} width={1500} height={500} className='mx-auto object-contain drop-shadow-md' />
      </div>
      // <div key={index} className='embla__slide flex-[0_0_100%] cursor-w-resize px-1 pb-4'>
      //   <Image src={`${screenshotPath}/${image}`} alt={`Image ${index}`} width={1500} height={500} className='mx-auto object-contain border border-menuButtonDark' />
      // </div>
    )
  })

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="mx-auto embla flex flex-col items-center">
      <div ref={emblaImageRef} className="embla__viewport relative overflow-hidden w-full h-full">
        <div className="embla__container flex w-full h-full max-w-[800px] relative z-0">
          {slides}
        </div>
        <div className="absolute inset-0 z-10 flex pointer-events-none">
          <div className="flex-1 cursor-w-resize pointer-events-auto" onClick={scrollPrev} aria-label="Previous" />
          <div className="flex-1 cursor-e-resize pointer-events-auto" onClick={scrollNext} aria-label="Next" />
        </div>
      </div>


      {slides.length > 1 && <div className="flex">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`p-2 h-3 w-3 cursor-pointer rounded-full hover:bg-textDefault hover:scale-125 duration-200 ${index === selectedIndex ? 'bg-textDefault scale-125' : 'bg-menuButton'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>}
    </div>
  )
}

export default ImageCarousel

