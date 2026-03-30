import { Technology, Scopes, Software, Sections } from '@/app/types'

export enum ProjectType {
  ELECTRONICS = Sections.ELECTRONICS,
  CODE = Sections.CODE,
  DESIGN = Sections.DESIGN
}

interface Project {
  slug: string
  title: string
  description: {
    top: string
    bottom?: string
  }
  note?: string
  images: string[]
  imagesRatio?: { w: number; h: number }
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
  mapUrl?: string
}
