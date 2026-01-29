'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'

import { useMountLogger } from '@/app/hooks/useMountLogger'

import { useCurrentProject } from '@/app/code/CurrentProjectContext'

import ProjectDetails from '@/app/code/[...project]/ProjectDetails'
import { projects, CURRENT_PROJECT_KEY } from '@/data/code'


const ProjectsPage = () => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useMountLogger('ProjectsPage')

  // const { setCurrentProject } = useCurrentProject()

  console.log('reloading')

  const projectIndex = Object.fromEntries(projects.map((project, index) => [project.slug, index]))

  const [isReady, setIsReady] = useState(false)

  const [initialProject] = useState(() => {
    const urlSlug = searchParams.get('project')
    if (urlSlug && projectIndex[urlSlug]) return urlSlug

    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(CURRENT_PROJECT_KEY)
      if (stored && projectIndex[stored]) return stored
    }

    return projects[0].slug
  })

  useEffect(() => {
    console.log('Effect 1')
    // setCurrentProject(initialProject)
    window.localStorage.setItem(CURRENT_PROJECT_KEY, initialProject)
  }, [initialProject])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: projectIndex[initialProject],
    loop: true,
    duration: 25,
    skipSnaps: false
  })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  const allProjects = projects.map((project) => {
    return (
      <div key={project.slug} className='embla__slide flex-[0_0_100%] pl-10'>
        <ProjectDetails project={project} />
      </div>
    )
  })


  useEffect(() => {
    console.log('Effect 2')
    if (!emblaApi) return
    if (!isReady) setIsReady(true)

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap()
      const slug = projects[index].slug
      // setCurrentProject(slug)
      window.localStorage.setItem(CURRENT_PROJECT_KEY, slug)
      // window.history.replaceState(null, '', `/code/${slug}`)
      router.replace(
        `${pathname}?project=${slug}`,
        { scroll: false }
      )
    }

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }

  }, [emblaApi])


  return (
    <section className='code embla content-1600 h-full p-4 md:p-8 pb-0 b-red'>
      <div className='w-full h-full flex flex-col b-green'>

        <div className='flex-1 flex items-center pb-4 md:pb-8'>
          <div ref={emblaRef} className={`embla__viewport overflow-hidden ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            <div className='embla__container flex items-center -ml-10' style={{ touchAction: 'pan-y pinch-zoom' }}>
              {allProjects}
            </div>
          </div>
        </div>

        <div className="w-full group flex align-center justify-between gap-8 text-menuText font-medium text-lg mt-4 md:mt-8">
          <div
            onClick={goToPrev}
            className='embla__prev flex flex-1 bg-white shadow-md p-2 rounded-lg justify-center'>Prev</div>
          <div
            onClick={goToNext}
            className='embla__next flex flex-1 bg-white shadow-md p-2 rounded-lg justify-center'>Next</div>
        </div>

      </div>

    </section>
  )
}
export default ProjectsPage

