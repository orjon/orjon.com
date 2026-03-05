import { CodeProject, ElectronicsProject, DesignProject } from '../types'

export const numberWithinRange = (
  number: number,
  min: number,
  max: number
): number => Math.min(Math.max(number, min), max)

export const getRandomArrayItem = (array: any[]): any =>
  array[Math.floor(Math.random() * array.length)]

export const hasProject = (
  projects: CodeProject[] | ElectronicsProject[] | DesignProject[],
  projectSlug: string
) => projects.some((project) => project.slug === projectSlug)

export const dedupeArray = (array: any[]): any[] => [...new Set(array)]

export const getSizes = (sizes: Record<string, number>): number[] =>
  Object.values(sizes)

export const getImageSizes = (sizes: Record<string, number>): string => {
  const entries = Object.entries(sizes)

  const [, restWidth] = entries.find(([key]) => key === 'rest')!
  const breakpoints = entries.filter(([key]) => key !== 'rest')

  if (!breakpoints.length) {
    return `${restWidth}px`
  }

  const parts = breakpoints.map(
    ([maxWidth, width]) => `(max-width: ${maxWidth}px) ${width}px`
  )

  parts.push(`${restWidth}px`)

  return parts.join(', ')
}

export const getSiteTitle = () => {
  const base = 'orjon.com'
  switch (process.env.NEXT_PUBLIC_ENV) {
    case 'staging':
      return `${base} | Staging`
    case 'local':
      return `${base} | Local`
    default:
      return base
  }
}
