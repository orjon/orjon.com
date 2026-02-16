/**
 * Custom loader for basePath: _next/image URL with full source URL in param so the Image API fetches via HTTP (optimization stays on).
 * Handles src that may already include basePath (from the custom Image wrapper).
 */
export default function basePathImageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''
  const pathWithBase =
    basePath && src.startsWith(basePath) ? src : basePath + (src.startsWith('/') ? src : '/' + src)
  const urlParam = siteUrl ? siteUrl.replace(/\/$/, '') + pathWithBase : pathWithBase
  const prefix = basePath || ''
  return `${prefix}/_next/image?url=${encodeURIComponent(urlParam)}&w=${width}&q=${quality || 75}`
}
