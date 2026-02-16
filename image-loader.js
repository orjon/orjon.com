/**
 * Custom loader for basePath: point to _next/image with basePath prefix.
 * Pass url param WITHOUT basePath so the Image Optimization API resolves against public/ (e.g. /icons/... -> public/icons/...).
 */
export default function basePathImageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const pathOnly = src.startsWith('/') ? src : '/' + src
  const prefix = basePath || ''
  return `${prefix}/_next/image?url=${encodeURIComponent(pathOnly)}&w=${width}&q=${quality || 75}`
}
