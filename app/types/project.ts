import { Technology } from '@/app/types'

export interface Project {
  slug: string
  title: string
  technologies: Technology[]
  github: string
  live: string
  icon: string
}
