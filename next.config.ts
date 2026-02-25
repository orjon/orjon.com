import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: [50, 64, 150, 300, 575, 655, 900, 1200, 1800],
    deviceSizes: [50, 64, 150, 300, 575, 655, 900, 1200, 1800],
    unoptimized: false,
    qualities: [24, 40, 60, 75],
    localPatterns: [
      {
        // Allow query strings on all images in /public
        pathname: '/**/*.{png,jpg,jpeg,gif,webp,svg}'
      }
    ]
  }
}

export default nextConfig
