import { Technology, Scopes, Software } from '@/app/types'

export enum ProjectType {
  ELECTRONICS = 'electronics',
  CODE = 'code',
  DESIGN = 'design',
}

// Per-project image metadata (src + optional blur placeholder)
export type ProjectImage = { src: string; blur: string | null }
export type ProjectImages = Record<string, ProjectImage[]>

interface Project {
  slug: string
  title: string
  description: {
    top: string
    bottom?: string
  }
  note?: string
  images: ProjectImage[]
  technologies: Technology[]
  repo: string
}

export type ElectronicsProject = Project & {
  projectType: ProjectType.ELECTRONICS
  demo: {
    url: string
    note: string | React.ReactNode
  }
}

export type CodeProject = Project & {
  projectType: ProjectType.CODE
  www?: string
  responsive: boolean
}

export type DesignProject = {
  projectType: ProjectType.DESIGN
  slug: string
  title: string
  subTitle?: string
  scope: Scopes[]
  software: Software[]
  image: string
}
