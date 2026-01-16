'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMe = pathname === '/me'

  return (
    <header className='relative'>
      <nav className='flex flex-col bg-titleBar'>
        <div className='flex flex-row justify-between items-center  px-2'>
          <Link href='/'>
            <h1 className='text-2xl font-bold'>orjon.com</h1>
          </Link>

          <div className='flex flex-row-reverse items-center'>
            <Link
              href='/me'
              className='group peer flex-row items-center cursor-pointer hidden md:flex'
            >
              <div className='relative h-[34px] w-[34px]'>
                <Image
                  src='/icons/nav/faceOFF.png'
                  className={`absolute-center transition-opacity opacity-100 duration-100 ${
                    isMe ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                  }`}
                  alt='face'
                  width={26}
                  height={26}
                />
                <Image
                  src='/icons/nav/faceON.png'
                  className={`absolute-center transition-opacity opacity-0 duration-100 ${
                    isMe ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  alt='face'
                  width={26}
                  height={26}
                />
              </div>
            </Link>
            <h1
              className={`ml-1 text-lg select-none font-medium transition-opacity opacity-0 duration-200 ${
                isMe ? 'opacity-100' : 'opacity-0 peer-hover:opacity-100'
              }`}
            >
              me
            </h1>
          </div>

          <button
            onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
            className='group cursor-pointer md:hidden'
          >
            <div className='relative h-[34px] w-[24px]'>
              <Image
                src='/icons/nav/burgerMenu2.png'
                className={`absolute-center transition-opacity ${
                  isBurgerMenuOpen ? 'opacity-0' : 'opacity-100'
                } duration-150 `}
                alt='face'
                width={26}
                height={26}
              />
              <Image
                src='/icons/nav/burgerMenuClose.png'
                className={`absolute-center transition-opacity ${
                  isBurgerMenuOpen ? 'opacity-100' : 'opacity-0'
                } duration-150`}
                alt='face'
                width={26}
                height={26}
              />
            </div>
          </button>
        </div>
        <Menu />
      </nav>
      <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
    </header>
  )
}
export default Navbar
