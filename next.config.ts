import type { NextConfig } from 'next'
import { imageSizes, imageQuality, screenMultipliers } from '@/app/constants'

const withMultipliers = (sizes: number[]) =>
  screenMultipliers.flatMap((m) => sizes.map((s) => s * m))

const contentSizes = [
  ...new Set(
    withMultipliers([
      ...imageSizes.codeImages,
      ...imageSizes.electronicsImages,
      ...imageSizes.designImages
    ])
  )
].sort((a, b) => a - b)

const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ENV === 'staging' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: imageSizes.base,
    deviceSizes: contentSizes,
    unoptimized: false,
    qualities: [imageQuality],
    localPatterns: [
      {
        pathname: '/**/*.{png,jpg,jpeg,gif,webp,svg}'
      }
    ]
  }
}

export default nextConfig
