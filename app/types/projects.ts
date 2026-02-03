import { Technology, Scopes, Software } from '@/app/types'

export interface CodeProject {
  slug: string
  title: string
  description: string
  technologies: Technology[]
  github: string
  www: string
  responsive: boolean
  icon?: string
  screenshots?: string[]
}

export interface DesignProject {
  slug: string
  title: string
  subTitle?: string
  scope: Scopes[]
  software: Software[]
  image: string
}
