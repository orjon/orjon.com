import type { NextConfig } from 'next'
import { imageSizes, imageQualities } from '@/app/constants'

const allImageSizes = Object.values(imageSizes).flat() as number[]

const nextConfig: NextConfig = {
  // assetPrefix: process.env.NEXT_PUBLIC_ENV === 'staging' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: allImageSizes,
    deviceSizes: allImageSizes,
    unoptimized: false,
    qualities: [imageQualities.navIcons, imageQualities.images],
    localPatterns: [
      {
        pathname: '/**/*.{png,jpg,jpeg,gif,webp,svg}'
      }
    ]
  }
}

export default nextConfig
