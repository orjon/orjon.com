import type { NextConfig } from 'next'

const basePath = process.env.NODE_ENV === 'production' ? '/staging' : ''

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Custom loader only: prepend basePath to the _next/image path; keep url param as /icons/... so the optimizer finds public files.
  ...(basePath && {
    images: {
      loader: 'custom',
      loaderFile: './image-loader.js',
    },
  }),
}

export default nextConfig
