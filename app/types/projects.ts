import { Technology, Scopes, Software } from '@/app/types'

export enum ProjectType {
  ELECTRONICS = 'electronics',
  CODE = 'code',
  DESIGN = 'design'
}

interface Project {
  slug: string
  title: string
  description: string
  technologies: Technology[]
  github: string
  images?: string[]
}

export type ElectronicsProject = Project & {
  type: 'electronics'
  demo?: string
}

export type CodeProject = Project & {
  type: 'code'
  www: string
  responsive: boolean
}

export type DesignProject = Project & {
  subTitle?: string
  scope: Scopes[]
  software: Software[]
  image: string
}
