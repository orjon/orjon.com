import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CurrentTime from '../CurrentTime'

const routes = [
  {
    name: 'code',
    href: '/code',
    iconOff: '/icons/nav/codeOFF.png',
    iconOn: '/icons/nav/codeON.png'
  },
  {
    name: 'design',
    href: '/design',
    iconOff: '/icons/nav/designOFF.png',
    iconOn: '/icons/nav/designON.png'
  },
  {
    name: 'electronics',
    href: '/electronics',
    iconOff: '/icons/nav/electronicsOFF.png',
    iconOn: '/icons/nav/electronicsON.png'
  }
]

const buttonBaseStyle =
  'relative group w-90 bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuBottom)_50%)] shadow-[inset_0px_-1px_2px_0px_var(--menuShadow)]'
const buttonStyle =
  'block flex flex-row gap-2 items-center p-1 bg-menuTop rounded-[4px] duration-100 ease-out transition-[margin] shadow-[inset_0px_-1px_2px_0px_var(--menuBottom)]'

const Menu = () => {
  const pathname = usePathname()

  const menuItems = routes.map((route) => (
    <div key={route.name} className={`${buttonBaseStyle}`}>
      <div className='absolute z-0 bg-titleBar w-full h-1/2'></div>
      <Link
        href={route.href}
        className={`relative z-10 ${buttonStyle} px-2 ${
          pathname === route.href ? `mb-0 mt-1` : 'mb-2 mt-0'
        } `}
      >
        <Image
          src={pathname === route.href ? route.iconOn : route.iconOff}
          alt={route.name}
          width={30}
          height={30}
        />
        {route.name}
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
      {menuItems}
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
