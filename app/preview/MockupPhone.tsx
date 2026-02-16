'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { phoneRatios } from '@/app/constants'

const initialPhoneSize = {
  opacity: 0,
  width: 1 / phoneRatios.overallRatio,
  height: 1,
  screen: {
    height: 0,
    width: 0,
    position: 0
  },
  logo: {
    height: 0,
    width: 0,
    top: 0,
    left: 0
  }
}


const MockupPhone = ({ slug }: { slug: string }) => {
  const [phone, setPhone] = useState(initialPhoneSize)
  const layoutRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  useLayoutEffect(() => {
    const node = layoutRef.current
    if (!node) return

    const updateSize = () => {
      const phoneSizes = {
        opacity: 1,
        width: node.clientHeight / phoneRatios.overallRatio,
        height: node.clientHeight,
        screen: {
          height: phoneRatios.screenHeightRatio * node.clientHeight,
          width: phoneRatios.screenWidthRatio * (node.clientHeight / phoneRatios.overallRatio),
          position: phoneRatios.screenPositionRatio * node.clientHeight,
        },
        logo: {
          height: phoneRatios.logoHeightRatio * node.clientHeight,
          width: phoneRatios.logoWidthRatio * (node.clientHeight / phoneRatios.overallRatio),
          top: phoneRatios.logoPositionTop * node.clientHeight,
          left: phoneRatios.logoPositionLeft * (node.clientHeight / phoneRatios.overallRatio)
        }
      }

      setPhone(phoneSizes)
    }

    updateSize()
    const observer = new ResizeObserver(updateSize)
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    iframeRef.current?.focus()
  }, [])

  const { opacity, width, height, screen, logo } = phone

  return (
    <div ref={layoutRef} className="h-[90%] w-full flex flex-col items-center justify-center">
      <div
        className='h-full flex flex-col items-center justify-center opacity-0 transition-[width,height,opacity] duration-1000 ease-out relative'
        style={{ width: `${width}px`, height: `${height}px`, opacity: `${opacity}` }}
      >
        <Image src="/images/mockup-phone/phone.webp" alt="Mockup Phone" fill className="object-cover" />

        <Link href="#"
          onClick={(e) => { e.preventDefault(); router.back(); }} className='absolute z-11 opacity-0 transition-opacity duration-500 delay-1000 ease-out' style={{ top: `${logo.top}px`, left: `${logo.left}px`, width: `${logo.width}px`, height: `${logo.height}px`, opacity: `${opacity}` }}>
          <Image src="/images/mockup-phone/logo.webp" alt="Mockup Phone" fill />
        </Link>


        {/* <Image src="/images/mockup-phone/logo.webp" alt="Mockup Phone" width={logo.width} height={logo.height} className='absolute z-11 opacity-0 transition-opacity duration-500 delay-1000 ease-out' style={{ top: `${logo.top}px`, left: `${logo.left}px`, width: `${logo.width}px`, height: `${logo.height}px`, opacity: `${opacity}` }} /> */}
        <iframe
          ref={iframeRef}
          src={`https://www.orjon.com/${slug}`}
          className='absolute z-10 opacity-0 transition-opacity duration-500 delay-1000 ease-out'
          style={{ top: `${screen.position}px`, width: `${screen.width}px`, height: `${screen.height}px`, opacity: `${opacity}` }}
          allow='fullscreen'
        />

      </div>
    </div>
  )
}

export default MockupPhone