import { Technology, Scopes, Software } from '@/app/types'

export interface CodeProject {
  slug: string
  title: string
  description: string
  technologies: Technology[]
  github: string
  icon: string
  screenshots: string[]
  www: string
  responsive: boolean
}

export interface DesignProject {
  slug: string
  title: string
  subTitle?: string
  scope: Scopes[]
  software: Software[]
  image: string
}

export interface ElectronicsProject {
  slug: string
  title: string
  description: string
  technologies: Technology[]
  github: string
  icon: string
  images: string[]
}
