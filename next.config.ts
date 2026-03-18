import type { NextConfig } from 'next'
import { imageSizes, imageQualities } from '@/app/constants'

const baseSizes = Object.values(imageSizes).flat() as number[]
const retinaSizes = baseSizes.map((w) => w * 2)
const allImageSizes = [...new Set([...baseSizes, ...retinaSizes])]

const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ENV === 'staging' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: allImageSizes,
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
