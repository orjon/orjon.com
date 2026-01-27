'use client'

import Link from 'next/link'

import { BiGridAlt, BiCarousel } from "react-icons/bi";
import { TbLayoutList } from "react-icons/tb";

import { projects } from '@/data/code'


const views = [
  {
    value: 'tile',
    href: '?view=tile',
    icon: <BiGridAlt />
  },
  {
    value: 'card',
    href: '?view=card',
    icon: <TbLayoutList />

  },
  {
    value: 'carousel',
    href: projects[0].slug,
    icon: <BiCarousel />
  }
]

const ProjectViewSelector = ({ setView }: { setView: (view: string) => void }) => {

  const viewLinks = views.map((view) => {
    const { value, href, icon } = view
    return (
      <Link
        key={value}
        className='flex align-center items-center text-2xl px-1 hover:scale-120 duration-150'
        href={`/code/${href}`}
        onClick={() => setView(value)}>
        {icon}
      </Link>
    )
  })

  return (
    <div className="w-full group flex align-center justify-between text-menuText bg-white shadow-md p-2 rounded-lg mb-4 md:mb-8">
      <div className='font-medium text-lg'>Projects</div>
      <div className='group flex align-center items-center'>{viewLinks}</div>
    </div>
  )
}
export default ProjectViewSelector
