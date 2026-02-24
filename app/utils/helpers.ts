import { CodeProject, ElectronicsProject, DesignProject } from '../types'

export const numberWithinRange = (
  number: number,
  min: number,
  max: number
): number => Math.min(Math.max(number, min), max)

export const hasProject = (
  projects: CodeProject[] | ElectronicsProject[] | DesignProject[],
  projectSlug: string
) => projects.some((project) => project.slug === projectSlug)
