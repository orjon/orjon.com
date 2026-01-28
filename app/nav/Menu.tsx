import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import CurrentTime from '../CurrentTime'
import { menuItems } from '@/app/constants'

const buttonBaseStyle =
  'relative group w-90 bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)]'
const buttonStyle =
  'block flex flex-row gap-2 items-center p-1 bg-menuButton rounded-[4px] duration-100 ease-out transition-[margin] '

const Menu = () => {
  const pathname = usePathname()

  const menu = menuItems
    .filter((menuItem) => !menuItem.titleBar)
    .map((menuItem) => (
      <div key={menuItem.name} className={`${buttonBaseStyle}`}>
        <div className='absolute z-0 bg-titleBar w-full h-1/2'></div>
        <Link
          href={menuItem.href}
          className={`relative z-10 ${buttonStyle} px-2 ${pathname === menuItem.href ? `` : ''
            } `}
        >
          <Image
            src={
              pathname.startsWith(menuItem.href) ? menuItem.iconOn : menuItem.iconOff
            }
            alt={menuItem.name}
            width={30}
            height={30}
          />
          {menuItem.name}
        </Link>
      </div>
    ))

  return (
    <div className='hidden md:flex flex-row text-lg font-medium text-menuText'>

      <div className={`${buttonBaseStyle} w-[8px]`}>
        <div className='absolute z-0 bg-titleBar w-full h-1/2'></div>
        <div
          className={`relative z-10 ${buttonStyle} w-[8px] rounded-l-none px-0`}
        >
          &nbsp;
        </div>
      </div>

      {menu}

      <div className={`${buttonBaseStyle} w-full`}>
        <div className='absolute z-0 bg-titleBar w-full h-1/2'></div>
        <div className={`relative z-10 ${buttonStyle} rounded-r-none`}>
          &nbsp;
        </div>
      </div>
    </div>
  )
}
export default Menu
