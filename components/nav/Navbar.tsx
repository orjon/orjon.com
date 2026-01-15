'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  return (
    <div className='relative'>
      <nav className='flex flex-col bg-titleBar'>
        <div className='flex flex-row justify-between items-center'>
          <Link href='/'>
            <h1 className='ml-2 text-2xl font-bold text-menuText'>orjon.com</h1>
          </Link>

          <Link
            href='/me'
            className='group flex-row items-center transition-all duration-500 cursor-pointer hidden md:flex'
          >
            <h1 className='mr-1 text-lg font-bold transition-opacity  opacity-0 group-hover:opacity-100 duration-500'>
              me
            </h1>
            <div className='relative h-[34px] w-[34px]'>
              <Image
                src='/icons/nav/faceOFF.png'
                className='absoluteCenter transition-opacity opacity-100 group-hover:opacity-0 duration-500'
                alt='face'
                width={26}
                height={26}
              />
              <Image
                src='/icons/nav/faceON.png'
                className='absoluteCenter transition-opacity opacity-0 group-hover:opacity-100 duration-500'
                alt='face'
                width={26}
                height={26}
              />
            </div>
          </Link>

          <button
            onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
            className='group mr-1 cursor-pointer md:hidden'
          >
            <div className='relative h-[34px] w-[34px]'>
              <Image
                src='/icons/nav/burgerMenu.png'
                className={`absoluteCenter transition-opacity ${
                  isBurgerMenuOpen ? 'opacity-0' : 'opacity-100'
                } duration-150 `}
                alt='face'
                width={26}
                height={26}
              />
              <Image
                src='/icons/nav/burgerMenuClose.png'
                className={`absoluteCenter transition-opacity ${
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
      <BurgerMenu
        burgerMenu={{
          isOpen: isBurgerMenuOpen,
          setIsOpen: setIsBurgerMenuOpen
        }}
      />
    </div>
  )
}
export default Navbar
