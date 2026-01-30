import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import CurrentTime from '../CurrentTime'
import { menuItems } from '@/app/constants'
import ProjectViewSelector from './ProjectViewSelector'

const buttonBaseStyle =
  'group bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]'

const buttonStyle =
  'group block flex flex-row gap-2 items-center py-1 bg-menuButton rounded-[4px] duration-100 ease-out transition-[margin] border border-1 border-menuButtonDark'


const MenuButtons = () => {
  const pathname = usePathname()
  const isCodePage = pathname.startsWith('/code')

  const menu = menuItems
    .filter((menuItem) => !menuItem.titleBar)
    .map((menuItem) => (
      <div key={menuItem.name} className={`${buttonBaseStyle} min-w-[150px] `}>
        <Link
          href={menuItem.href}
          className={`relative z-10 ${buttonStyle} px-2 ${pathname.startsWith(menuItem.href) ? 'mb-0 mt-1' : 'mb-2 mt-0'} `}>
          <div className="relative w-[30px] h-[26px]">
            <Image
              src={menuItem.iconOff}
              alt={menuItem.name}
              width={30}
              height={30}
              className={`absolute inset-0 transition-opacity ${pathname.startsWith(menuItem.href) ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
            />
            <Image
              src={menuItem.iconOn}
              alt={menuItem.name}
              width={30}
              height={30}
              className={`absolute inset-0 transition-opacity ${pathname.startsWith(menuItem.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            />
          </div>
          {menuItem.name}
        </Link>
      </div>
    ))

  return (


    <div
      className="menu hidden overflow-x-hidden md:grid w-full items-center text-lg font-medium text-menuText shadow-sm"
      style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(auto, 1600px) minmax(0, 1fr)' }}>

      <div className={`${buttonBaseStyle} relative w-full h-full`}>
        <div className={`relative z-10 ${buttonStyle} w-full rounded-l-none border-l-0`}>&nbsp;</div>
      </div>

      <div className="h-full w-full flex justify-center items-center bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]">
        {menu}
        <div className={`${buttonBaseStyle} relative w-full h-full`}>
          <div className={`z-10 mb-2 pr-4 ${buttonStyle} rounded-r-none border-r-0`}>
            &nbsp;{isCodePage && <ProjectViewSelector />}
          </div>

        </div>
      </div>

      <div className={`${buttonBaseStyle} relative w-full`}>
        <div className={`relative z-10 mb-2  ${buttonStyle} rounded-none border-x-0 `}>&nbsp;</div>
      </div>

    </div>


  )
}
export default MenuButtons
