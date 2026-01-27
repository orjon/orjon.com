'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'


import ProjectViewSelector from '@/app/code/ProjectViewSelector'
import ProjectDetails from '@/app/code/ProjectDetails'

import { projects } from '@/data/code'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

// {
//   slug: 'cisco2015',
//   label: 'Internet of Everything, CiscoLive! 2015 : Milan',
//   technologies:
//     'Layout, Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, V-Ray, Photoshop',
//   image: '/images/design/cisco2015.jpg'
// },

const ProjectPage = () => {
  const params = useParams()
  const projectSlug = params.project?.[0] || 'buttonstyler'
  const currentIndex = projects.findIndex(p => p.slug === projectSlug)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  console.log('currentIndex', currentIndex)
  console.log('projectSlug', projectSlug)
  console.log('projects', projects)

  if (currentIndex === -1) {
    return notFound()
  }

  const project = projects[currentIndex]


  const allProjects = projects.map((project) => {
    return (
      <div key={project.slug} className='embla__slide flex-[0_0_100%] pl-10'>
        <ProjectDetails project={project} />
      </div>
    )
  })


  return (
    <section className='code embla content-1600 h-full p-4 md:p-8 pb-0 b-red'>
      <div className='w-full h-full flex flex-col b-green'>

        <ProjectViewSelector setView={() => { }} />

        <div className='flex-1 flex items-center pb-4 md:pb-8'>
          <div ref={emblaRef} className='embla__viewport overflow-hidden'>
            <div className='embla__container flex -ml-10' style={{ touchAction: 'pan-y pinch-zoom' }}>
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
export default ProjectPage



const ProjectPageOld = () => {

  const projectSlug = 'buttonstyler'



  const currentIndex = projects.findIndex(p => p.slug === projectSlug)

  if (currentIndex === -1) {
    notFound()
  }

  const project = projects[currentIndex]
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1]
  const nextProject = projects[currentIndex + 1] || projects[0]

  const projectTechnologies = project.technologies.sort((a, b) => a.localeCompare(b)).map(technology => {
    return (
      <li key={technology} className="text-white font-medium bg-gray-400 rounded-sm px-2 py-1 text-sm">
        {technology}
      </li>
    )
  })

  return (
    <section className='code content-1600 h-full p-4 md:p-8 pb-0'>

      <div className='w-full h-full flex flex-col'>
        {/* Header with navigation back to code */}
        <div className="w-full flex items-center justify-between text-menuText bg-white shadow-md p-2 rounded-lg mb-4 md:mb-8">
          <Link href="/code?view=tile" className="font-medium text-lg hover:text-gray-600 transition-colors">
            ← Projects
          </Link>
          <div className="text-sm text-gray-500">
            {currentIndex + 1} of {projects.length}
          </div>
        </div>

        {/* Main carousel content */}
        <div className='flex-1 flex items-center pb-4 md:pb-8'>
          <div className="w-full flex items-center justify-between gap-4">
            <Link
              href={`/code/${prevProject.slug}`}
              className="flex-none p-2 md:p-4 text-3xl md:text-5xl text-gray-400 hover:text-gray-600 hover:scale-110 transition-all duration-150"
            >
              <IoIosArrowBack />
            </Link>

            {/* Project card */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">

              <article className="w-full flex flex-col items-center gap-6">

                <div className='w-full flex items-center justify-center h-[200px] md:h-[300px] relative'>
                  {project.icon && (
                    <Image
                      src={project.icon}
                      alt={project.title}
                      fill
                      className='object-contain'
                      sizes='(max-width: 768px) 100vw, 800px'
                    />
                  )}
                </div>


                <div className='flex flex-col w-full gap-4'>
                  <div className="flex flex-col items-center gap-2">
                    <h1 className='text-2xl md:text-3xl font-bold text-center'>{project.title}</h1>
                    <p className='text-base md:text-lg text-gray-600 text-center'>{project.description}</p>
                  </div>


                  <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase">Technologies</h2>
                    <ul className="flex flex-wrap gap-2">{projectTechnologies}</ul>
                  </div>


                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                    >
                      <FaGithub className="text-xl" />
                      View on GitHub
                    </Link>
                    <Link
                      href={project.www}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <FaExternalLinkAlt />
                      Visit Website
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Next button */}
            <Link
              href={`/code/${nextProject.slug}`}
              className="flex-none p-2 md:p-4 text-3xl md:text-5xl text-gray-400 hover:text-gray-600 hover:scale-110 transition-all duration-150"
            >
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}