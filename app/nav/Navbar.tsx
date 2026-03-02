'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { getNavIcon } from '@/app/utils'
import ButtonMenu from './ButtonMenu'
import BurgerMenu from './BurgerMenu'
import { imageQualities } from '@/app/constants'

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMe = pathname === '/me'
  const hideNavbar = pathname?.startsWith('/preview')


  // check if needed as we have a second layout page
  if (hideNavbar) {
    return null
  }

  const opacityTransitionStyle =
    'transition-opacity duration-250'


  return (
    <header className='relative z-10 shadow-[0_4px_8px_rgba(0,0,0,0.15)]'>
      <nav className='flex flex-col bg-titleBar text-menuText'>
        <div className='content-1600 flex flex-row justify-between items-center px-4 py-2 sm:px-2 sm:py-0'>
          <Link href='/'>
            <h1 className='text-black text-2xl font-bold'>orjon.com</h1>
          </Link>

          <div className='flex flex-row-reverse items-center'>
            <Link
              href='/me'
              className='group peer flex-row items-center cursor-pointer hidden sm:flex'
            >
              <div className='relative h-[34px] w-[34px]'>
                <Image
                  src={getNavIcon('faceLarge', false)}
                  className={`absolute-center size-full object-contain opacity-100 ${opacityTransitionStyle} ${isMe ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}
                  alt='face'
                  width={26}
                  height={26}
                  sizes='30px'
                  style={{ width: 26, height: 26 }}
                  quality={imageQualities.navIcons}
                />
                <Image
                  src={getNavIcon('faceLarge', true)}
                  className={`absolute-center size-full object-contain opacity-0 ${opacityTransitionStyle} ${isMe ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  alt='face'
                  width={26}
                  height={26}
                  sizes='30px'
                  style={{ width: 26, height: 26 }}
                  quality={imageQualities.navIcons}
                />
              </div>
            </Link>
            <div
              className={`hidden sm:block ml-1 text-lg select-none font-medium opacity-0 ${opacityTransitionStyle} ${isMe ? 'opacity-100' : 'opacity-0 peer-hover:opacity-100'
                }`}
            >
              me
            </div>
          </div>

          <button
            onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
            className='group cursor-pointer sm:hidden'
          >
            <div className='relative h-[34px] w-[24px]'>
              <Image
                src={getNavIcon('burgerMenu', false)}
                className={`absolute-center size-full object-contain ${opacityTransitionStyle} ${isBurgerMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                alt='face'
                width={26}
                height={26}
                sizes='30px'
                style={{ width: 26, height: 26 }}
                quality={imageQualities.navIcons}
              />
              <Image
                src={getNavIcon('burgerMenu', true)}
                className={`absolute-center size-full object-contain ${opacityTransitionStyle} ${isBurgerMenuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                alt='face'
                width={26}
                height={26}
                sizes='30px'
                style={{ width: 26, height: 26 }}
                quality={imageQualities.navIcons}
              />
            </div>
          </button>
        </div>

        <ButtonMenu />
        <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
      </nav>
    </header>
  )
}
export default Navbar
