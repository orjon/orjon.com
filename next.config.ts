import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // basePath: '/staging',
  assetPrefix: '/staging',
  images: {
    formats: ['image/webp', 'image/avif'],
    // Ensure image optimization works with assetPrefix
    unoptimized: false,
    qualities: [24, 40, 60, 75]
  }
}

export default nextConfig
