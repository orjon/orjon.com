import { Technology } from '@/app/types'

export interface Project {
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
