'use client'

import { useEffect } from 'react'


// import ColorOne from './colorOne/ColorOne'

const DemosPage = () => {


  return (

    <section className='DesignProjectPage relative content-1600 flex-1 max-h-full flex flex-col items-center justify-center b-blue'>
      <div className='DesignProjectDetails w-full bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4 md:gap-6 max-w-[1000px] b-green'>
        <article className={`flex w-full flex-col gap-1 md:gap-2`}>
          <div className="w-full flex flex-col ">
            <div className='w-full text-xl sm:text-2xl md:text-3xl font-bold'>Temp</div>
            <div className='text-sm sm:text-base md:text-lg'>Test box</div>
          </div>

          <div className='w-full h-full flex flex-col items-center justify-center b-red'>
            {/* <Image
            src={image}
            alt={title}
            width={1000}
            height={600}
            className='w-full h-auto object-contain'
            sizes='(max-width: 1000px) 100vw, 1000px'
          /> */}
            {/* <ColorOne /> */}
            <iframe
              src="/electronics/colorOne/index.html"
              title="ColorOne demo"
              className="w-full aspect-video border-0 rounded-lg"
            />
          </div>

        </article>
      </div>

    </section>

  )
}

export default DemosPage