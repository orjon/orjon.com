import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // basePath: '/staging',
  assetPrefix: '/staging',
  images: {
    formats: ['image/webp', 'image/avif'],
    // Ensure image optimization works with assetPrefix
    unoptimized: false
  }
}

export default nextConfig
