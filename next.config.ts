import type { NextConfig } from 'next'
import { imageSizes, imageQualities, screenMultipliers } from '@/app/constants'

const withMultipliers = (sizes: number[]) =>
  screenMultipliers.flatMap(m => sizes.map(s => s * m))

const iconSizes = [...new Set(withMultipliers([
  ...imageSizes.navIcon,
  ...imageSizes.techIcons,
  ...imageSizes.projectIcon,
]))].sort((a, b) => a - b)

const contentSizes = [...new Set(withMultipliers([
  ...imageSizes.projectImage,
  ...imageSizes.designImage,
]))].sort((a, b) => a - b)

const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ENV === 'staging' ? '/staging' : '',
  images: {
    formats: ['image/webp', 'image/avif'],
    imageSizes: iconSizes,
    deviceSizes: contentSizes,
    unoptimized: false,
    qualities: [imageQualities.navIcons, imageQualities.images],
    localPatterns: [
      {
        pathname: '/**/*.{png,jpg,jpeg,gif,webp,svg}'
      }
    ]
  }
}

export default nextConfig
