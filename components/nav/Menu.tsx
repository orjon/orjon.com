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
  'group w-90 splitGrey duration-100 bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuBottom)_50%)]'
const buttonStyle =
  'block flex flex-row gap-2 items-center p-1 bg-grey300 rounded-[3px] duration-100 shadow-[inset_0px_0px_1px_0px_var(--color-grey400)]'

const Menu = () => {
  const pathname = usePathname()

  const menuItems = routes.map((route) => (
    <div key={route.name} className={`${buttonBaseStyle}`}>
      <Link
        href={route.href}
        className={`${buttonStyle} px-2 ${
          pathname === route.href
            ? `mb-0 mt-1 text-${route.name}`
            : 'mb-2 mt-0 text-grey050'
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
    <div className='hidden md:flex flex-row bg-grey300 text-grey050 text-lg font-medium'>
      <div className={`${buttonBaseStyle} w-[8px]`}>
        <div className={`${buttonStyle} w-[8px] rounded-l-none px-0`}>
          &nbsp;
        </div>
      </div>
      {menuItems}
      <div className={`${buttonBaseStyle} w-full`}>
        <div className={`${buttonStyle} rounded-r-none`}>&nbsp;</div>
      </div>
    </div>
  )
}
export default Menu
