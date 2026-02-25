'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'

import { useMountLogger } from '@/app/hooks/useMountLogger'
import { useEmblaOpacityTween } from '@/app/hooks/useEmblaOpacityTween'

import { setLocalStorageValue, getLocalStorageValue } from '@/app/utils/client'

import DesignProjectCard from '@/app/design/[...project]/DesignProjectDetails'
import { designProjects } from '@/app/data/design'
import ProjectsCarouselControls from '@/app/components/ProjectsCarouselControls'
import { ProjectType } from '@/app/types/projects';

const defaultProject = designProjects[0].slug


const DesignProjectPage = () => {
  const params = useParams()

  useMountLogger('DesignProjectPage ORIGINAL')
  console.log('reloading: DesignProjectPage ORIGINAL')

  const projectIndex = Object.fromEntries(designProjects.map((project, index) => [project.slug, index]))

  const [isReady, setIsReady] = useState(false)

  const [initialProject] = useState(() => {
    const urlSlug = params.project?.[0]
    if (urlSlug && projectIndex[urlSlug]) {
      setLocalStorageValue(ProjectType.DESIGN, urlSlug)
      return urlSlug
    }

    if (typeof window !== 'undefined') {
      const stored = getLocalStorageValue(ProjectType.DESIGN)
      if (stored && projectIndex[stored]) return stored
    }

    setLocalStorageValue(ProjectType.DESIGN, defaultProject)
    return defaultProject
  })

  const [emblaProjectRef, emblaApi] = useEmblaCarousel({
    startIndex: projectIndex[initialProject],
    loop: true,
    duration: 30,
    skipSnaps: false
  })

  useEmblaOpacityTween(emblaApi)

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    console.log('Effect 2')
    if (!emblaApi) return
    if (!isReady) setIsReady(true)

    const updateCurrentProject = () => {
      const index = emblaApi.selectedScrollSnap()
      const slug = designProjects[index].slug
      setLocalStorageValue(ProjectType.DESIGN, slug)
      window.history.replaceState(null, '', `/design/${slug}`)
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

  const allProjects = designProjects.map((project, index) => {
    return (
      <div
        key={project.slug}
        ref={(el) => { slideRefs.current[index] = el }}
        className='embla__slide flex-[0_0_100%] w-full h-full overflow-y-auto p-6 sm:p-14 flex flex-col'
      >
        <div className='min-h-full flex items-center justify-center shrink-0'>
          <DesignProjectCard project={project} />
        </div>
      </div>
    )
  })


  return (
    <section className='DesignProjectPage embla relative bg-white sm:bg-transparent flex-1 max-h-full flex flex-col'>

      <div
        ref={emblaProjectRef}
        className={`embla__viewport h-full max-h-full overflow-x-hidden min-h-0 ${isReady ? 'opacity-100' : 'opacity-0'} `}>
        <div
          className='embla__container h-full max-h-full flex items-start'
          style={{ touchAction: 'pan-y pinch-zoom' }}>
          {allProjects}
        </div>
      </div>

      <ProjectsCarouselControls onPrev={goToPrev} onNext={goToNext} />

    </section>
  )
}
export default DesignProjectPage
