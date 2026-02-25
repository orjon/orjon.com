import Link from 'next/link'
import { contactInfo } from '@/app/data'

import TechnologyIcons from '../components/TechnologyIcons'


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


const MePage = () => {
  return (
    <section className='me w-full h-full p-6 md:p-14 overflow-y-auto bg-white sm:bg-background'>


      <div className='flex-1 flex items-center content-1600 justify-center'>
        <div className='w-full bg-white sm:p-6 rounded-2xl sm:shadow-md flex flex-col gap-2 md:gap-4 max-w-[1200px]'>
          <div className='text-3xl font-bold'>Orjon</div>
          <div className='text-xl font-medium'>developer + designer + maker</div>
          <div className='text-lg/6'>
            <p>Web Development</p>
            <p>B.Sc.(Hons) Product Design</p>
          </div>

          <hr className='border-textDefault/25 my-2' />

          <div className='bioTextWrapper flex flex-col gap-2 mx-auto max-w-[800px]'>
            <p className='bioText'>Hello, I am a full-stack developer, 3D designer, and obsessive tinkerer with over 25 years’ experience working with clients in the UK, Europe, the Middle East and Africa.</p>

            <p className='bioText'>Get in touch and let's build stuff!</p>
          </div>
          <div className='contact flex flex-col gap-1 mx-auto w-fit font-medium'>
            {contactDetails}
          </div>

          <hr className='border-textDefault/25 my-2' />

          <TechnologyIcons />


        </div>
      </div>




    </section>
  )
}
export default MePage
