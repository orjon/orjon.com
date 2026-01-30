'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'

import { useMountLogger } from '@/app/hooks/useMountLogger'

import { setLocalStorageValue, getLocalStorageValue } from '@/app/utils'

import ProjectDetails from '@/app/code/[...project]/ProjectDetails'
import { projects, CURRENT_PROJECT_KEY } from '@/data/code'

const defaultProject = projects[0].slug

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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: projectIndex[initialProject],
    loop: true,
    duration: 25,
    skipSnaps: false
  })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

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
          <ProjectDetails project={project} index={index} total={projects.length} goToPrev={goToPrev} goToNext={goToNext} />
        </div>
      </div>
    )
  })


  return (
    <section className='code embla content-1600 flex-1 max-h-full flex flex-col'>

      <div
        ref={emblaRef}
        className={`embla__viewport h-full max-h-full overflow-x-hidden min-h-0 ${isReady ? 'opacity-100' : 'opacity-0'} `}>
        <div
          className='embla__container h-full max-h-full flex items-start'
          style={{ touchAction: 'pan-y pinch-zoom' }}>
          {allProjects}
        </div>
      </div>

    </section>
  )
}
export default ProjectPage
