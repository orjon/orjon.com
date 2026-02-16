/**
 * Custom loader for basePath. Pass url as FULL absolute URL when NEXT_PUBLIC_SITE_URL is set
 * so the Image API fetches via HTTP (nginx/app serves the file); otherwise internal request 404s.
 */
export default function basePathImageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''
  const pathOnly = src.startsWith('/') ? src : '/' + src
  const pathWithBase = basePath + pathOnly
  const urlParam = siteUrl ? siteUrl.replace(/\/$/, '') + pathWithBase : pathWithBase
  const prefix = basePath || ''
  return `${prefix}/_next/image?url=${encodeURIComponent(urlParam)}&w=${width}&q=${quality || 75}`
}
