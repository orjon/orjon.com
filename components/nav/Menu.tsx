import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  {
    name: 'code',
    href: '/code',
    icon: '/icons/nav/code.png'
  },
  {
    name: 'design',
    href: '/design',
    icon: '/icons/nav/design.png'
  },
  {
    name: 'electronics',
    href: '/electronics',
    icon: '/icons/nav/electronics.png'
  }
]

const buttonStyles =
  'block w-full p-1 bg-grey300 mb-2 mt-0 rounded-[1px] group-hover:mb-0 group-hover:mt-1 duration-100 shadow-[inset_0px_0px_1px_0px_var(--color-grey400)]'

const Menu = () => {
  const pathname = usePathname()

  const menuItems = routes.map((route) => (
    <div key={route.name} className='group w-40 splitGrey duration-100'>
      <Link
        href={route.href}
        className={`${buttonStyles} ${
          pathname === route.href ? 'text-code mb-0 mt-1' : 'text-grey050'
        } `}
      >
        {route.name}
      </Link>
    </div>
  ))
  return (
    <div className='hidden md:flex flex-row bg-grey300 text-grey050 text-lg font-medium'>
      <div className='group w-[8px] splitGrey  duration-100'>
        <div className='block w-full p-1 rounded-r-[1px] bg-grey300 mb-2 text-grey300'>
          .
        </div>
      </div>
      {menuItems}
      <div className='group w-full splitGrey  duration-100'>
        <div className='block w-full p-1 rounded-l-[1px] bg-grey300 mb-2 text-grey300'>
          nothing to see here...
        </div>
      </div>
    </div>
  )
}
export default Menu
