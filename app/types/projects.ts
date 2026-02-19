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
  note?: string
  images?: string[]
  imageAutoPlay?: boolean
  technologies: Technology[]
  github: string
}

export type ElectronicsProject = Project & {
  projectType: 'electronics'
  demo?: string
}

export type CodeProject = Project & {
  projectType: 'code'
  www?: string
  responsive: boolean
}

export type DesignProject = {
  slug: string
  title: string
  subTitle?: string
  scope: Scopes[]
  software: Software[]
  image: string
}
