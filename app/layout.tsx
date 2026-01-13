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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={`${baiJamjuree.variable} antialiased`}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
export default Layout
