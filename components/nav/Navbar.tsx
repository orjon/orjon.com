'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  return (
    <nav className='flex flex-col  bg-slate-400'>
      <div className='flex flex-row justify-between '>
        <button className='ml-2'>
          <Link href='/'>
            <h1 className='text-2xl font-bold'>orjon.com</h1>
          </Link>
        </button>

        <button
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
          className='mr-2 cursor-pointer hidden md:block'
        >
          <Link href='/me'>
            <h1 className='text-lg font-bold'>me</h1>
          </Link>
        </button>

        <button
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
          className='my-1 mx-2 cursor-pointer md:hidden invert'
        >
          <Image
            src='/icons/nav/burgerMenu.png'
            alt='burger menu'
            width={20}
            height={20}
          />
        </button>
      </div>

      <Menu />
    </nav>
  )
}
export default Navbar
