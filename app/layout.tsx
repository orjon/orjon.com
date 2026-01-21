import type { Metadata } from 'next'

import { Bai_Jamjuree } from 'next/font/google'
import Navbar from '@/components/nav/Navbar'

import '@/assets/styles/globals.css'

const baiJamjuree = Bai_Jamjuree({
  variable: '--font-bai-jamjuree',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'orjon.com | nextjs',
  keywords: ['nextjs', 'website', 'portfolio', 'developer', 'code', 'orjon'],
  description: 'new nextjs website'
}

const Layout = ({ children, showMenu = true }: { children: React.ReactNode, showMenu: boolean }) => {
  return (
    <html className='h-screen bg-blue-200'>
      <body
        className={`${baiJamjuree.variable} flex flex-col antialiased h-dvh`}
      >
        {showMenu && <Navbar />}
        <main className='w-full bg-gray-200 flex flex-col flex-1 overflow-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
export default Layout
