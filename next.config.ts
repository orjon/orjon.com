import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    // imageSizes: [50, 150, 300, 575, 655, 900],
    // deviceSizes: [50, 150, 300, 575, 655, 900],
    unoptimized: false,
    qualities: [24, 40, 60, 75]
  }
}

export default nextConfig
