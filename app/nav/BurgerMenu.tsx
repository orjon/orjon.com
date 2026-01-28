import Link from 'next/link'

import { menuItems } from '@/app/constants'

const BurgerMenu = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: (isBurgerMenuOpen: boolean) => void
}) => {
  const burgerMenu = menuItems.map((menuItem) => (
    <Link
      key={menuItem.name}
      href={menuItem.href}
      className={`transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1>{menuItem.name}</h1>
    </Link>
  ))

  return (
    <div
      className={`absolute left-0 right-0 top-full z-40 md:hidden text-lg font-medium origin-top transform transition-transform duration-500 px-2 flex flex-col text-center gap-4 bg-menuTop ${
        isOpen ? 'scale-y-100' : 'scale-y-0'
      }`}
    >
      {burgerMenu}
    </div>
  )
}
export default BurgerMenu
