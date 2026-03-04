import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { menuItems } from '@/app/data'
import { getNavIcon } from '@/app/utils'
import { imageQualities } from '@/app/constants'

import ProjectViewSelector from './ProjectViewSelector'
import RandomProject from './RandomProject'

const buttonBaseStyle =
  'bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]'

const buttonGapStyle =
  'block flex h-[40px] flex-row gap-2 items-center py-1 bg-menuButton border border-menuButtonDark border-x-0'

const buttonStyle =
  'block h-[40px] flex flex-row gap-2 items-center py-1 bg-menuButton rounded-[4px] border border-menuButtonDark'

const marginTransitionStyle =
  'transition-[margin] duration-250 ease-out'

const zeroWidthSpace = '\u200B'


const ButtonMenu = () => {
  const pathname = usePathname()

  const menu = menuItems
    .filter((menuItem) => !menuItem.titleBar)
    .map((menuItem) => {
      const href = `/${menuItem.name}`
      const path = pathname.startsWith(href)
      return (
        <div key={menuItem.name} className={`${buttonBaseStyle} group min-w-[60px] md:min-w-[150px] `}>
          <Link
            href={href}
            className={`z-10 ${buttonStyle} justify-center md:justify-start ${marginTransitionStyle} px-2 ${path ? 'mb-0 mt-1' : 'mb-2 mt-0'} `}>
            <div className="relative size-[30px] shrink-0">
              <Image
                src={getNavIcon(menuItem.icon, false)}
                alt={menuItem.name}
                width={30}
                height={30}
                sizes='30px'
                className={`absolute inset-0 size-full object-contain transition-opacity duration-250 ${path ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
                style={{ width: 30, height: 30 }}
                quality={imageQualities.navIcons}
              />
              <Image
                src={getNavIcon(menuItem.icon, true)}
                alt={menuItem.name}
                width={30}
                height={30}
                sizes='30px'
                className={`absolute inset-0 size-full object-contain transition-opacity duration-250 ${path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                style={{ width: 30, height: 30 }}
                quality={imageQualities.navIcons}
              />
            </div>
            <div className='hidden md:block'>{menuItem.name}</div>
          </Link>
        </div>
      )
    })

  return (


    <div
      className="ButtonMenu w-full hidden sm:grid overflow-x-hidden items-center text-lg font-medium text-menuText"
      style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(auto, 1600px) minmax(0, 1fr)' }}>

      <div className={`ButtonMenuLeft ${buttonBaseStyle} relative w-full h-full`}>
        <div className={`ButtonMenuLeft-buttons relative z-10 ${buttonGapStyle} w-full`}>{zeroWidthSpace}</div>
      </div>

      <div className="ButtonMenuCenter h-full w-full flex justify-center items-center bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]">
        <div className={`ButtonMenuCenter-GapLeft ${buttonBaseStyle} relative h-full`}>
          <div className={`relative z-10 pl-2 ${buttonStyle} w-full rounded-l-none border-l-0`}>{zeroWidthSpace}</div>
        </div>
        {menu}
        <div className={`ButtonMenuCenter-GapLeft ${buttonBaseStyle} relative h-full w-full`}>
          <div className={`relative z-10 pl-2 ${buttonStyle} w-full`}><RandomProject /></div>
        </div>
        <Suspense fallback={<div className="h-[40px] w-[40px]" />}>
          <ProjectViewSelector />
        </Suspense>
        <div className={`ButtonMenuCenter-GapRight ${buttonBaseStyle} relative h-full`}>
          <div className={`relative z-10 pl-2 ${buttonStyle} justify-start w-full rounded-r-none border-r-0`}>{zeroWidthSpace}</div>
        </div>
      </div>

      <div className={`ButtonMenuRight ${buttonBaseStyle} relative w-full h-full`}>
        <div className={`ButtonMenuRight-buttons relative z-10 mb-2  ${buttonGapStyle}`}>{zeroWidthSpace}</div>
      </div>

    </div>


  )
}
export default ButtonMenu
