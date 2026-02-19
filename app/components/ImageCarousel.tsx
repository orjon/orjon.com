'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import Image from 'next/image'
import { isGif } from '@/app/utils/client'

const OPTIONS: EmblaOptionsType = {
  loop: true,
  skipSnaps: false,
  watchDrag: false
}

export const ImageCarousel = ({ images, hasBorder = false, autoPlay = true, isActive = false }: { images: string[], hasBorder?: boolean, autoPlay?: boolean, isActive?: boolean }) => {

  const isSlideshow = images.length > 1

  const border = {
    padding: hasBorder ? 'p-[1px]' : '',
    class: hasBorder ? 'drop-shadow-[0_0_1px_black] drop-shadow-[0_0_1px_black] rounded-lg' : '',
  }

  const autoplay = useRef(
    Autoplay({
      playOnInit: false,
      delay: 4000,
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

  useEffect(() => {
    if (!emblaApi || !isSlideshow) return
    (autoPlay && isActive) ? autoplay.current.play() : autoplay.current.stop()
  }, [emblaApi, autoplay, autoPlay, isActive])

  const slides = images.map((image, index) => {

    return (
      <div key={index} className={`embla__slide flex-[0_0_100%] flex items-center justify-center ${border.padding}`}>
        <Image
          src={image}
          alt={`Image ${index}`}
          width={0} height={0}
          sizes='100vw'
          loading={index === 0 ? 'eager' : 'lazy'}
          priority={index === 0 && !isGif(image)}
          quality={60}
          unoptimized={isGif(image)}
          style={{ maxHeight: 'min(500px, 50vh)', width: '100%', height: '100%' }}
          className={`mx-auto object-contain ${border.class}`} />
      </div>
    )
  })

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="ImageCarousel w-full flex flex-col items-center">
      <div className="mx-auto embla flex flex-col items-center">
        <div ref={emblaImageRef} className="embla__viewport relative overflow-hidden w-full h-full">
          <div className="embla__container flex w-full h-full max-w-[900px] relative z-0">
            {slides}
          </div>
          {isSlideshow &&
            <div className="absolute inset-0 z-10 flex pointer-events-none">
              <div className="flex-1 cursor-w-resize pointer-events-auto" onClick={scrollPrev} aria-label="Previous" />
              <div className="flex-1 cursor-e-resize pointer-events-auto" onClick={scrollNext} aria-label="Next" />
            </div>
          }
        </div>


        {isSlideshow && <div className="ControlButtons pt-2 flex gap-2 md:gap-3 lg:gap-5">
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

