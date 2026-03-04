import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { menuItems } from '@/app/data'
import { getNavIcon } from '@/app/utils'
import { imageQualities } from '@/app/constants'


const BurgerMenu = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: (isBurgerMenuOpen: boolean) => void
}) => {

  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (!menuRef.current || !target) return
      if (!menuRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  const burgerMenu = menuItems.map((menuItem) => {

    const href = `/${menuItem.name}`
    const path = pathname.startsWith(href)

    return (
      <Link
        key={menuItem.name}
        href={href}
        onClick={() => setIsOpen(false)}
        className={`py-2 flex justify-center gap-2 border-b border-menuButtonDark transition-opacity duration-250 ${isOpen ? 'opacity-100' : 'opacity-0'
          } ${path ? 'bg-menuButton' : 'none'}`}
      >
        <div className="relative size-[30px] shrink-0">
          <Image
            src={getNavIcon(menuItem.icon, false)}
            alt={menuItem.name}
            width={30}
            height={30}
            sizes='30px'
            className={`absolute inset-0 size-full object-contain transition-opacity ${path ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
            style={{ width: 30, height: 30 }}
            quality={imageQualities.navIcons}
          />
          <Image
            src={getNavIcon(menuItem.icon, true)}
            alt={menuItem.name}
            width={30}
            height={30}
            sizes='30px'
            className={`absolute inset-0 size-full object-contain transition-opacity ${path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            style={{ width: 30, height: 30 }}
            quality={imageQualities.navIcons}
          />
        </div>
        <div className="w-30">{menuItem.name}</div>
      </Link>
    )
  })

  return (
    <div
      ref={menuRef}
      className={`BurgerMenu absolute left-0 right-0 top-full z-20 sm:hidden text-lg font-medium origin-top transform transition-transform duration-500 gap-4 bg-menuButton cursor-pointer  ${isOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
    >
      {burgerMenu}
    </div>
  )
}
export default BurgerMenu
