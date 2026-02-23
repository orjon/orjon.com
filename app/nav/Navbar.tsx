'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ButtonMenu from './ButtonMenu'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMe = pathname === '/me'
  const hideNavbar = pathname?.startsWith('/preview')

  if (hideNavbar) {
    return null
  }

  return (
    <header className='relative z-10 shadow-[0_4px_8px_rgba(0,0,0,0.15)]'>
      <nav className='flex flex-col bg-titleBar text-menuText'>
        <div className='content-1600 flex flex-row justify-between items-center px-2 py-2 sm:py-0'>
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
                  src='/icons/nav/faceOFF-large.png'
                  className={`absolute-center size-full object-contain transition-opacity opacity-100 duration-100 ${isMe ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}
                  alt='face'
                  width={26}
                  height={26}
                  style={{ width: 26, height: 26 }}
                />
                <Image
                  src='/icons/nav/faceON-large.png'
                  className={`absolute-center size-full object-contain transition-opacity opacity-0 duration-100 ${isMe ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  alt='face'
                  width={26}
                  height={26}
                  style={{ width: 26, height: 26 }}
                />
              </div>
            </Link>
            <div
              className={`hidden sm:block ml-1 text-lg select-none font-medium transition-opacity opacity-0 duration-200 ${isMe ? 'opacity-100' : 'opacity-0 peer-hover:opacity-100'
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
                src='/icons/nav/burgerMenu2.png'
                className={`absolute-center size-full object-contain transition-opacity ${isBurgerMenuOpen ? 'opacity-0' : 'opacity-100'
                  } duration-150 `}
                alt='face'
                width={26}
                height={26}
                style={{ width: 26, height: 26 }}
              />
              <Image
                src='/icons/nav/burgerMenuClose.png'
                className={`absolute-center size-full object-contain transition-opacity ${isBurgerMenuOpen ? 'opacity-100' : 'opacity-0'
                  } duration-150`}
                alt='face'
                width={26}
                height={26}
                style={{ width: 26, height: 26 }}
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
