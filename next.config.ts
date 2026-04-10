import type { NextConfig } from 'next'
import { imageSizes, imageQuality, screenMultipliers } from '@/app/constants'

const withMultipliers = (sizes: number[]) =>
  screenMultipliers.flatMap((m) => sizes.map((s) => s * m))

const allImageSizes = [...new Set(withMultipliers(imageSizes.base))]

const allDeviceSizes = [
  ...new Set(
    withMultipliers([
      ...imageSizes.codeImages,
      ...imageSizes.electronicsImages,
      ...imageSizes.designImages
    ])
  )
]

const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ENV === 'staging' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: allImageSizes,
    deviceSizes: allDeviceSizes,
    unoptimized: false,
    qualities: [imageQuality.icon, imageQuality.image],
    minimumCacheTTL: 31536000,
    localPatterns: [
      {
        pathname: '/**/*.{png,jpg,jpeg,gif,webp,svg}'
      }
    ]
  }
}

export default nextConfig
