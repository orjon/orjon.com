import { github } from '@/app/types/github'

export const setLocalStorageValue = (key: string, value: string) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, value)
}

export const getLocalStorageValue = (
  key: string,
  defaultValue = null as string | null
) => {
  if (typeof window === 'undefined') return defaultValue
  return window.localStorage.getItem(key) || defaultValue
}

export const numberWithinRange = (
  number: number,
  min: number,
  max: number
): number => Math.min(Math.max(number, min), max)

export const isGif = (imagePath: string): boolean =>
  imagePath?.toLowerCase().endsWith('.gif')

export const getGithubLink = (repo: string) => {
  return `${github.baseUrl}/${github.user}/${repo}`
}

export const getCommits = (repo: string) => {
  return `${github.api}/${github.user}/${repo}/${github.commits}`
}
