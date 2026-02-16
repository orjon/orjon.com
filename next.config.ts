import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // No basePath in dev (localhost:3000/); use /staging in production
  basePath: process.env.NODE_ENV === 'production' ? '/staging' : '',
}

export default nextConfig
