import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: [480, 600, 700, 900, 1120],
    deviceSizes: [480, 768, 1024, 1280],
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
