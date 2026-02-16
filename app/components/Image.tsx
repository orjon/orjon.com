'use client'

import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * Wrapper around next/image that prefixes src with basePath for subdirectory deployments
 * (e.g. /staging). Use this instead of next/image so images work with basePath.
 * @see https://dev.to/_bc65c0ea08af6add2230/solving-image-path-issues-in-subdirectory-deployments-with-nextjs-app-router-typescript-1ld3
 */
export function Image({ src, ...rest }: ImageProps) {
  const resolvedSrc =
    typeof src === 'string' && src.startsWith('/')
      ? basePath + src
      : typeof src === 'string'
        ? basePath + (src ? `/${src}` : '')
        : src

  return <NextImage src={resolvedSrc} {...rest} />
}
