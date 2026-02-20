'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import Image from 'next/image'
import { isGif } from '@/app/utils/client'
import { breakpoints } from '@/app/types'

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
          sizes={`(min-width: ${breakpoints.lg}) 900px, (min-width: ${breakpoints.md}) 655px, 575px`}
          loading={index === 0 ? 'eager' : 'lazy'}
          priority={index === 0 && !isGif(image)}
          quality={75}
          unoptimized={isGif(image)}
          // placeholder={isGif(image) ? undefined : 'blur'}
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

/* note for me:
<img
  alt="Image 0"
  loading="eager"
  width="0"
  height="0"
  decoding="async"
  data-nimg="1"
  class="mx-auto object-contain drop-shadow-[0_0_1px_black] drop-shadow-[0_0_1px_black] rounded-lg"
  sizes="100vw"
  srcset="
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=640&amp;q=60 640w,
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=750&amp;q=60 750w,
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=828&amp;q=60 828w,
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=1080&amp;q=60 1080w,
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=1200&amp;q=60 1200w,
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=1920&amp;q=60 1920w,
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=2048&amp;q=60 2048w,
  /_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=3840&amp;q=60 3840w"
  src="/_next/image?url=%2Fimages%2Fprojects%2Ftubeinfo%2Ftubeinfo%2000.png&amp;w=3840&amp;q=60"
  style="color: transparent; max-height: min(500px, 50vh); width: 100%; height: 100%;">
</img>
*/
