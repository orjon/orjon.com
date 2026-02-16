/**
 * Custom loader for basePath: pass the path only (e.g. /staging/icons/nav/face.png) in the url param.
 * Next.js Image API then uses fetchInternalImage (same process) instead of HTTP fetch, so static files
 * from public/ are served correctly without going through nginx. Optimization stays on.
 */
export default function basePathImageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const pathWithBase =
    basePath && src.startsWith(basePath) ? src : basePath + (src.startsWith('/') ? src : '/' + src)
  const prefix = basePath || ''
  return `${prefix}/_next/image?url=${encodeURIComponent(pathWithBase)}&w=${width}&q=${quality || 75}`
}
