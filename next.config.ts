import type { NextConfig } from 'next'

// const basePath = process.env.NODE_ENV === 'production' ? '/staging' : ''

// // For basePath: set NEXT_PUBLIC_SITE_URL at build (e.g. https://staging.orjon.com) so the Image API can fetch source images via HTTP.
// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (basePath === '/staging' ? 'https://staging.orjon.com' : '')

const nextConfig: NextConfig = {
  basePath: '/staging',
  assetPrefix: '/staging'
  // env: {
  //   NEXT_PUBLIC_BASE_PATH: basePath,
  //   ...(siteUrl && { NEXT_PUBLIC_SITE_URL: siteUrl }),
  // },
  // ...(basePath && {
  //   images: {
  //     loader: 'custom',
  //     loaderFile: './image-loader.js',
  //     ...(siteUrl && {
  //       remotePatterns: [
  //         { protocol: 'https', hostname: new URL(siteUrl).hostname, pathname: `${basePath}/**` },
  //         { protocol: 'http', hostname: new URL(siteUrl).hostname, pathname: `${basePath}/**` },
  //       ],
  //     }),
  //   },
  // }),
}

export default nextConfig
