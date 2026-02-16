/**
 * Prefix path with basePath when deployed under a subpath (e.g. /staging).
 * Use for all Image src and img src so they work with next.config basePath.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  return base + normalized
}
