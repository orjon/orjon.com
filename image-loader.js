/**
 * Custom Next.js image loader that prepends basePath to the image URL.
 * Required when using basePath so the Image Optimization API can find static files.
 * See next.config.js images.loaderFile.
 */
export default function basePathImageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const fullSrc = src.startsWith('/') ? basePath + src : basePath + '/' + src
  const prefix = basePath || ''
  return `${prefix}/_next/image?url=${encodeURIComponent(fullSrc)}&w=${width}&q=${quality || 75}`
}
