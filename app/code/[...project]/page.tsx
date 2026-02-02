'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel'

import { useMountLogger } from '@/app/hooks/useMountLogger'

import { setLocalStorageValue, getLocalStorageValue } from '@/app/utils'

import ProjectDetails from '@/app/code/[...project]/ProjectDetails'
import { projects, CURRENT_PROJECT_KEY } from '@/data/code'

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const defaultProject = projects[0].slug

const TWEEN_FACTOR_BASE = 1

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const ProjectPage = () => {
  const params = useParams()

  useMountLogger('ProjectPage ORIGINAL')
  console.log('reloading: ProjectPage ORIGINAL')

  const projectIndex = Object.fromEntries(projects.map((project, index) => [project.slug, index]))

  const [isReady, setIsReady] = useState(false)

  const [initialProject] = useState(() => {
    const urlSlug = params.project?.[0]
    if (urlSlug && projectIndex[urlSlug]) {
      setLocalStorageValue(CURRENT_PROJECT_KEY, urlSlug)
      return urlSlug
    }

    if (typeof window !== 'undefined') {
      const stored = getLocalStorageValue(CURRENT_PROJECT_KEY)
      if (stored && projectIndex[stored]) return stored
    }

    setLocalStorageValue(CURRENT_PROJECT_KEY, defaultProject)
    return defaultProject
  })

  const [emblaProjectRef, emblaApi] = useEmblaCarousel({
    startIndex: projectIndex[initialProject],
    loop: true,
    duration: 30,
    skipSnaps: false
  })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback(
    (api: EmblaCarouselType, event?: EmblaEventType) => {
      const engine = api.internalEngine()
      const scrollProgress = api.scrollProgress()
      const slidesInView = api.slidesInView()
      const isScrollEvent = event === 'scroll'

      api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const slidesInSnap = [snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          let diffToTarget = scrollSnap - scrollProgress

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          const node = api.slideNodes()[slideIndex]
          if (node) node.style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)

    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)

    return () => {
      emblaApi.off('reInit', setTweenFactor)
      emblaApi.off('reInit', tweenOpacity)
      emblaApi.off('scroll', tweenOpacity)
      emblaApi.off('slideFocus', tweenOpacity)
    }
  }, [emblaApi, setTweenFactor, tweenOpacity])

  useEffect(() => {
    console.log('Effect 2')
    if (!emblaApi) return
    if (!isReady) setIsReady(true)

    const updateCurrentProject = () => {
      const index = emblaApi.selectedScrollSnap()
      const slug = projects[index].slug
      setLocalStorageValue(CURRENT_PROJECT_KEY, slug)
      window.history.replaceState(null, '', `/code/${slug}`)
    }

    const resetScrollPositions = () => {
      const index = emblaApi.selectedScrollSnap()
      slideRefs.current.forEach((el, i) => {
        if (i !== index) el?.scrollTo({ top: 0 })
      })
    }

    emblaApi.on('settle', updateCurrentProject)
    emblaApi.on('select', resetScrollPositions)
    return () => {
      emblaApi.off('settle', updateCurrentProject)
      emblaApi.off('select', resetScrollPositions)
    }

  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        emblaApi.scrollPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        emblaApi.scrollNext()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [emblaApi])

  const allProjects = projects.map((project, index) => {
    return (
      <div
        key={project.slug}
        ref={(el) => { slideRefs.current[index] = el }}
        className='embla__slide flex-[0_0_100%] w-full h-full overflow-y-auto p-4 md:p-8 flex flex-col'
      >
        <div className='min-h-full flex items-center justify-center shrink-0'>
          <ProjectDetails project={project} />
        </div>
      </div>
    )
  })


  return (
    <section className='code embla relative content-1600 flex-1 max-h-full flex flex-col'>

      <div
        ref={emblaProjectRef}
        className={`embla__viewport h-full max-h-full overflow-x-hidden min-h-0 ${isReady ? 'opacity-100' : 'opacity-0'} `}>
        <div
          className='embla__container h-full max-h-full flex items-start'
          style={{ touchAction: 'pan-y pinch-zoom' }}>
          {allProjects}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-between pointer-events-none">
        <div
          onClick={goToPrev}
          className='embla__prev flex cursor-pointer text-2xl md:text-4xl pl-1 md:pl-2 justify-start hover-scale-120 pointer-events-auto'><FaArrowLeft className="drop-shadow-md hover:drop-shadow-lg" /></div>
        <div
          onClick={goToNext}
          className='embla__next flex cursor-pointer text-2xl md:text-4xl pr-1 md:pr-2 justify-end hover-scale-120 pointer-events-auto'><FaArrowRight className="drop-shadow-md hover:drop-shadow-lg" /></div>
      </div>

    </section>
  )
}
export default ProjectPage
