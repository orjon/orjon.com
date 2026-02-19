'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import Image from 'next/image'

const OPTIONS: EmblaOptionsType = {
  loop: true,
  skipSnaps: false,
  watchDrag: false
}

export const ImageCarousel = ({ images, hasBorder = false, autoPlay = true }: { images: string[], hasBorder?: boolean, autoPlay?: boolean }) => {

  const border = {
    padding: hasBorder ? 'p-[1px]' : '',
    class: hasBorder ? 'drop-shadow-[0_0_1px_black] drop-shadow-[0_0_1px_black] rounded-lg' : '',
  }

  const autoplay = useRef(
    Autoplay({
      playOnInit: autoPlay,
      delay: 5000,
      stopOnInteraction: false,
    })
  )

  const [emblaImageRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Fade(), autoplay.current,
  ])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = () => {
    autoplay.current.stop()
    emblaApi?.scrollPrev()
  }

  const scrollNext = () => {
    autoplay.current.stop()
    emblaApi?.scrollNext()
  }

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const slides = images.map((image, index) =>
    <div key={index} className={`embla__slide flex-[0_0_100%] cursor-w-resize flex items-center justify-center ${border.padding}`}>
      <Image src={image} alt={`Image ${index}`} width={1500} height={500} className={`max-h-[min(500px,50vh)] mx-auto object-contain ${border.class}`} />
    </div>
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="ImageCarousel w-full flex flex-col items-center">
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


        {slides.length > 1 && <div className="ControlButtons pt-2 flex gap-2 md:gap-3 lg:gap-5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                autoplay.current.stop()
                scrollTo(index)
              }}
              className={`h-3 w-3 cursor-pointer rounded-full hover:scale-125 duration-200 ${index === selectedIndex ? 'bg-textDefault scale-125' : 'bg-menuButton'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>}
      </div>
    </div>
  )
}

export default ImageCarousel

