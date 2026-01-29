'use client'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'


const OPTIONS: EmblaOptionsType = { loop: true, duration: 30, skipSnaps: false, watchDrag: false }

const slides = [1, 2, 3, 4, 5]

export const ImageCarousel = ({ images, options }: { images: string[], options?: EmblaOptionsType }) => {

  const [emblaRef2, emblaApi] = useEmblaCarousel(OPTIONS, [Fade(), Autoplay({ delay: 5000 })])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => { console.log('scrollPrev'); emblaApi?.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { console.log('scrollNext'); emblaApi?.scrollNext() }, [emblaApi])


  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const imagePath = '/images/code/project4/screenshots'

  const slides = images.map((image, index) => {
    return (
      <div key={index} className='embla__slide flex-[0_0_100%] cursor-w-resize'>
        <Image src={`${imagePath}/${image}`} alt={`Image ${index}`} width={1500} height={500} className='mx-auto object-contain' />
        {/* {image} */}
      </div>
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
    <div className="mx-auto embla flex flex-col items-center gap-4 b-blue">
      <div ref={emblaRef2} className="embla__viewport relative overflow-hidden w-full h-full shadow-lg">
        <div className="embla__container flex w-full h-full max-w-[800px] relative z-0">
          {slides}
          {/* {slides.map((n) => (
            <div
              key={n}
              className="embla__slide flex-[0_0_100%] w-full h-[200px] flex items-center justify-center text-4xl bg-gray-200"
            >
              {n}
            </div>
          ))} */}
        </div>
        <div className="absolute inset-0 z-10 flex pointer-events-none">
          <div className="flex-1 cursor-w-resize pointer-events-auto" onClick={scrollPrev} aria-label="Previous" />
          <div className="flex-1 cursor-e-resize pointer-events-auto" onClick={scrollNext} aria-label="Next" />
        </div>
      </div>

      {/* <div className="flex gap-4">
        <button type="button" onClick={scrollPrev}>Prev</button>
        <button type="button" onClick={scrollNext}>Next</button>
      </div> */}

      <div className="flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`h-3 w-3 cursor-pointer rounded-full ${index === selectedIndex ? 'bg-textDefault' : 'bg-menuButton'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel


// 'use client'

// import useEmblaCarousel from 'embla-carousel-react'
// import Image from 'next/image'

// const ImageCarousel = ({ images }: { images: string[] }) => {

//   const [emblaRef2, emblaApi] = useEmblaCarousel({
//     watchDrag: false,
//     startIndex: 0,
//     loop: true,
//     duration: 25,
//     skipSnaps: false,
//     dragFree: false
//   })

//   const goToPrev = () => emblaApi?.scrollPrev()
//   const goToNext = () => emblaApi?.scrollNext()

//   const imagePath = '/images/code/project4/screenshots'

//   const slides = images.map((image, index) => {
//     return (
//       <div key={index} className='embla__slide flex-[0_0_100%] b-red'>
//         {/* <Image src={`${imagePath}/${image}`} alt={`Image ${index}`} width={500} height={500} className='object-contain b-green' /> */}
//         {image}
//       </div>
//     )
//   })

//   return (

//   )
// }
// export default ImageCarousel

// // import { EmblaOptionsType } from 'embla-carousel'
// // import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// // import useEmblaCarousel from 'embla-carousel-react'

// // type PropType = {
// //   slides: number[]
// //   options?: EmblaOptionsType
// // }


