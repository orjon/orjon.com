import type { Metadata } from 'next'
import Link from 'next/link'
import { Bai_Jamjuree } from 'next/font/google'
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
        <Link href='/'>
          <h1 className='text-2xl font-bold'>orjon.com</h1>
        </Link>
        <div className='flex flex-row gap-4'>
          <Link href='/projects'>
            <h1 className='text-lg font-bold'>Projects</h1>
          </Link>
          <Link href='/about'>
            <h1 className='text-lg font-bold'>About</h1>
          </Link>
          <Link href='/contact'>
            <h1 className='text-lg font-bold'>Contact</h1>
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}
export default Layout
