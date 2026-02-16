import Link from 'next/link'

import { technologyIcons, technologyIconPath, contactInfo } from '@/app/data'
import { asset } from '@/app/lib/asset'

const contactDetails = contactInfo.map((item) => (
  <div className='flex align-center items-center' key={item.href}>
    <Link className='flex align-center items-center' href={item.href}>
      <div className='flex align-center items-center'>
        {item.icon}
      </div>
      <div className='ml-2'>{item.text}</div>
    </Link>
  </div>
))

const technologyIconList = technologyIcons.map((item) => (
  <div key={item.name} className='w-full flex justify-center items-center'>
    <img src={asset(`${technologyIconPath}/${item.icon}`)} alt={item.name} />
  </div>
))


const MePage = () => {
  return (
    <section className='me content-1600 h-full p-4 md:p-8 pb-0 overflow-y-auto bg-white sm:bg-background'>
      <div className='w-full h-full flex flex-col'>

        <div className='flex-1 flex items-center justify-center pb-4 md:pb-8'>
          <div className='w-full bg-white sm:p-6 rounded-2xl sm:shadow-md flex flex-col gap-2 md:gap-4 max-w-[1000px]'>
            <div className='text-3xl font-bold'>Orjon</div>
            <div className='text-xl font-medium'>developer + designer + visualiser + maker</div>
            <div className='text-lg/6'>
              <p>Web Development</p>
              <p>B.Sc.(Hons) Product Design</p>
            </div>

            <hr className='border-textDefault/25' />

            <div className='bioTextWrapper flex flex-col gap-2'>
              <p className='bioText'>Hello, I am a full-stack developer, 3D designer, visualiser, and obsessive tinkerer with over twenty years’ experience working with leading brand agencies, architects, developers and product designers in Europe, the Middle East and Africa.</p>

              <p className='bioText'>Get in touch and let's build stuff!</p>
            </div>
            <div className='contact flex flex-col gap-1 mx-auto w-fit font-medium'>
              {contactDetails}
            </div>

            <hr className='border-textDefault/25' />

            <div className='w-full mb-2 gap-x-4 gap-y-6 grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))]'>
              {technologyIconList}
            </div>

          </div>
        </div>
      </div>



    </section>
  )
}
export default MePage
