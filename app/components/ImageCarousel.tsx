'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import Image from 'next/image'
import { isGif, addBuildVersion } from '@/app/utils'
import { imageQualities } from '@/app/constants'

const OPTIONS: EmblaOptionsType = {
  loop: true,
  skipSnaps: false,
  watchDrag: false,
  containScroll: false, // recommended with Fade when slides are < 100% viewport width
}

export const ImageCarousel = ({
  images,
  demo = false,
  isActive = false,
}: {
  images: string[]
  demo: { url: string; note: string | React.ReactNode } | false
  isActive?: boolean
}) => {

  const isSlideshow = demo || images.length > 1

  const autoplayRef = useRef(
    Autoplay({
      playOnInit: false,
      delay: 4000,
      stopOnInteraction: true,
    })
  )

  let autoPlay = demo ? false : true

  const [emblaImageRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Fade(), autoplayRef.current,
  ])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = () => {
    autoplayRef.current.stop()
    emblaApi?.scrollPrev()
  }

  const scrollNext = () => {
    autoplayRef.current.stop()
    emblaApi?.scrollNext()
  }

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  // Start & stop autoplay
  useEffect(() => {
    if (!emblaApi || !isSlideshow) return
    (autoPlay && isActive) ? autoplayRef.current.play() : autoplayRef.current.stop()
  }, [emblaApi, autoplayRef, autoPlay, isActive])


  const slides = images.map((image, index) => {

    const isCoverImage = index === 0
    const isGifImage = isGif(image);
    autoPlay = (isCoverImage && isGifImage) ? false : autoPlay
    const loading = isCoverImage ? "eager" : "lazy"
    const fetchPriority = isCoverImage ? "high" : "auto"

    return (
      <div key={index} className='embla__slide flex-[0_0_100%] flex items-center justify-center'>
        <Image
          src={addBuildVersion(image)}
          alt={`Image ${index}`}
          width={0} height={0}
          sizes='(max-width: 640px) 480px, (max-width: 768px) 600px, (max-width: 1023px) 900px, (max-width: 1120px) 700px, 900px'
          preload={isCoverImage}
          loading={loading}
          fetchPriority={fetchPriority}
          quality={imageQualities.images}
          unoptimized={isGifImage}
          style={{ maxHeight: 'min(500px, 50vh)', width: '100%', height: '100%' }}
          className='mx-auto object-contain' />
      </div>
    )
  })


  if (demo) {
    slides.unshift(
      <div key="demo" className='embla__slide flex-[0_0_100%] flex items-center justify-center'>
        <div className='w-full h-full flex flex-col max-h-[min(500px,50vh)]'>
          <iframe
            src={demo.url}
            className="w-full h-full mx-auto relative"
          />
          <div className='absolute bottom-0 w-full text-center text-xs sm:text-sm md:text-base -mt-[12px]'>{demo.note}</div>
        </div>
      </div>
    )
  }


  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (

    <div className="ImageCarousel embla mx-auto h-full flex flex-col items-center">
      <div ref={emblaImageRef} className="embla__viewport relative overflow-hidden h-full">
        <div className="embla__container flex h-full max-w-[900px] max-h-[min(500px,50vh)] relative z-0">
          {slides}
        </div>
        {/* {isSlideshow &&
          <div className="absolute inset-0 z-10 flex pointer-events-none">
            <div className="flex-1 cursor-w-resize pointer-events-auto" onClick={scrollPrev} aria-label="Previous" />
            <div className="flex-1 pointer-events-none" />
            <div className="flex-1 cursor-e-resize pointer-events-auto" onClick={scrollNext} aria-label="Next" />
          </div>
        } */}
      </div>


      {isSlideshow && <div className="ControlButtons pt-2 flex gap-5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              autoplayRef.current.stop()
              scrollTo(index)
            }}
            className={`h-3 w-3 cursor-pointer rounded-full hover:scale-125 duration-250 ${index === selectedIndex ? 'bg-textDefault scale-125' : 'bg-menuButton'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>}
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


// const slides = images.map((image, index) => {

//   return (
//     <div key={index} className='embla__slide flex-[0_0_100%] flex items-center justify-center'>
//       <Image
//         src={image}
//         alt={`Image ${index}`}
//         width={0} height={0}
//         sizes={`(min-width: ${breakpoints.lg}) 900px, (min-width: ${breakpoints.md}) 655px, 575px`}
//         quality={75}
//         style={{ maxHeight: 'min(500px, 50vh)', width: '100%', height: '100%' }}
//         className='mx-auto object-contain' />
//     </div>
//   )
// })
