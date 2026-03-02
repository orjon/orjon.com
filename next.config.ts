import type { NextConfig } from 'next'
import { imageSizes, imageQualities, deviceSizes } from '@/app/constants'

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: [imageSizes.navIcon, ...imageSizes.projectImage],
    deviceSizes,
    unoptimized: false,
    qualities: [imageQualities.icons, imageQualities.images],
    localPatterns: [
      {
        // Allow query strings on all images in /public
        pathname: '/**/*.{png,jpg,jpeg,gif,webp,svg}'
      }
    ]
  }
}

export default nextConfig
