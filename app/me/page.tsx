import Link from 'next/link'

import { technologyIcons, technologyIconPath, contactInfo } from './me'

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
    <img src={`${technologyIconPath}${item.icon}`} alt={item.name} />
  </div>
))

const MePage = () => {
  return (
    <section className='me content-1600 h-full grid place-items-center'>

      <div className='content-1000 m-y-4 p-6'>
        <div className='text-3xl font-bold'>Orjon</div>
        <div className='text-xl font-medium'>developer + designer + visualiser + maker</div>
        <div className='text-lg/6 my-1'>
          <p>Web Development</p>
          <p>B.Sc.(Hons) Product Design</p>

        </div>

        <hr className='mt-4 mb-6 border-textDefault/25' />

        <div className='bioTextWrapper'>
          <p className='bioText'>Hello, I am a full-stack developer, 3D designer, visualiser, and obsessive tinkerer with over twenty years’ experience working with leading brand agencies, architects, developers and product designers in Europe, the Middle East and Africa.</p>

          <p className='bioText my-2'>Get in touch and let's build stuff!</p>
        </div>
        <div className='contact flex flex-col gap-1 w-fit'>
          {contactDetails}
        </div>

        <hr className='mt-4 mb-6 border-textDefault/25' />

        <div className='w-full gap-x-4 gap-y-6 grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))]'>
          {technologyIconList}
        </div>

      </div>


    </section>
  )
}
export default MePage
