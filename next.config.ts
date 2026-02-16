import type { NextConfig } from 'next'

const basePath = process.env.NODE_ENV === 'production' ? '/staging' : ''

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Only use custom loader in production (when basePath is set). In dev, use default so /_next/image works.
  ...(basePath && {
    images: {
      loader: 'custom',
      loaderFile: './image-loader.js',
    },
  }),
}

export default nextConfig
