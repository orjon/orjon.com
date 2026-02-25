import { codeProjects } from './code'
import { electronicsProjects } from './electronics'
import { designProjects } from './design'

export * from './menu'
export * from './electronics'
export * from './code'
export * from './design'
export * from './me'
export * from './paths'
export * from './technologyIcons'

export const allProjects = [
  ...codeProjects,
  ...electronicsProjects,
  ...designProjects
]
