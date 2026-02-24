import type { Metadata } from 'next'

import '@/assets/styles/globals.css'
import { Bai_Jamjuree } from 'next/font/google'

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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className='h-full bg-white md:bg-background'>
      <body
        className={`${baiJamjuree.variable} flex flex-col antialiased h-dvh`}
      >

        <main className='flex-1 w-full bg-background flex flex-col overflow-hidden'>
          {children}
        </main>

      </body>
    </html>
  )
}
export default Layout
