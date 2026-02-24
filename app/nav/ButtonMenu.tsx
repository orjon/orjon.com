import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { ImageType } from '@/app/types'
import { menuItems } from '@/app/data'
import ProjectViewSelector from './ProjectViewSelector'
import { addBuildVersion, getIconPath } from '@/app/utils'


const buttonBaseStyle =
  'group bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]'

const buttonGapStyle =
  'block flex h-[40px] flex-row gap-2 items-center py-1 bg-menuButton duration-100 ease-out transition-[margin] border border-menuButtonDark border-x-0'

const buttonStyle =
  'group block h-[40px] flex flex-row gap-2 items-center py-1 bg-menuButton rounded-[4px] duration-100 ease-out transition-[margin] border border-menuButtonDark'

const zeroWidthSpace = '\u200B'


const ButtonMenu = () => {
  const pathname = usePathname()

  const menu = menuItems
    .filter((menuItem) => !menuItem.titleBar)
    .map((menuItem) => {
      const href = `/${menuItem.name}`
      const path = pathname.startsWith(href)
      return (
        <div key={menuItem.name} className={`${buttonBaseStyle} min-w-[150px] `}>
          <Link
            href={href}
            className={`z-10 ${buttonStyle} px-2 ${path ? 'mb-0 mt-1' : 'mb-2 mt-0'} `}>
            <div className="relative size-[30px] shrink-0">
              <Image
                src={addBuildVersion(getIconPath(ImageType.NAV_ICON, `${menuItem.icon}OFF`))}
                alt={menuItem.name}
                width={30}
                height={30}
                className={`absolute inset-0 size-full object-contain transition-opacity ${path ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
                style={{ width: 30, height: 30 }}
              />
              <Image
                src={addBuildVersion(getIconPath(ImageType.NAV_ICON, `${menuItem.icon}ON`))}
                alt={menuItem.name}
                width={30}
                height={30}
                className={`absolute inset-0 size-full object-contain transition-opacity ${path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                style={{ width: 30, height: 30 }}
              />
            </div>
            {menuItem.name}
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
          <div className={`relative z-10 pl-2 ${buttonStyle} w-full`}>{zeroWidthSpace}</div>
        </div>
        <ProjectViewSelector />
        <div className={`ButtonMenuCenter-GapRight ${buttonBaseStyle} relative h-full`}>
          <div className={`relative z-10 pl-2 ${buttonStyle} w-full rounded-r-none border-r-0`}>{zeroWidthSpace}</div>
        </div>
      </div>

      <div className={`ButtonMenuRight ${buttonBaseStyle} relative w-full h-full`}>
        <div className={`ButtonMenuRight-buttons relative z-10 mb-2  ${buttonGapStyle}`}>{zeroWidthSpace}</div>
      </div>

    </div>


  )
}
export default ButtonMenu
