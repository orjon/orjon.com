import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { useBurgerMenu } from '@/app/context/BurgerMenuContext'

import { menuItems } from '@/app/data'
import { getNavIcon } from '@/app/utils'
import { imageQuality } from '@/app/constants'


const BurgerMenu = () => {

  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)

  const { isBurgerMenuOpen, closeBurgerMenu } = useBurgerMenu()

  useEffect(() => {
    if (!isBurgerMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!menuRef.current || !target || target.closest('#burger-menu-toggle')) return

      if (!menuRef.current.contains(target)) {
        closeBurgerMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isBurgerMenuOpen, closeBurgerMenu])

  const burgerMenu = menuItems.map((menuItem) => {

    const href = `/${menuItem.name}`
    const isCurrentPage = pathname.startsWith(href)

    return (
      <Link
        key={menuItem.name}
        href={href}
        onClick={() => closeBurgerMenu()}
        className={`group py-3 flex items-center justify-center gap-3 transition-opacity duration-250 ${isBurgerMenuOpen ? 'opacity-100' : 'opacity-0'
          } ${isCurrentPage ? 'bg-menuButton' : 'bg-menuButtonDark'}`}
      >
        <div className="relative size-[35px] shrink-0">
          <Image
            src={getNavIcon(menuItem.icon, false)}
            alt={menuItem.name}
            width={35}
            height={35}
            sizes='35px'
            quality={imageQuality.icon}
            className={`absolute inset-0 size-full object-contain transition-opacity duration-250 ${isCurrentPage ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
          />
          <Image
            src={getNavIcon(menuItem.icon, true)}
            alt={menuItem.name}
            width={35}
            height={35}
            sizes='35px'
            quality={imageQuality.icon}
            aria-hidden
            className={`absolute inset-0 size-full object-contain transition-opacity duration-250 ${isCurrentPage ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          />
        </div>
        <div className="w-30">{menuItem.name}</div>
      </Link>
    )
  })

  return (
    <div
      ref={menuRef}
      className={`BurgerMenu absolute left-0 right-0 top-full z-20 sm:hidden text-2xl font-medium origin-top transform transition-transform duration-500 gap-4 bg-menuButton cursor-pointer shadow-[0_4px_8px_rgba(0,0,0,0.15)] ${isBurgerMenuOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
    >
      {burgerMenu}
    </div>
  )
}
export default BurgerMenu
