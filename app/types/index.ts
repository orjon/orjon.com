import { ProjectType } from './projects'

export const sections = {
  [ProjectType.CODE]: ProjectType.CODE,
  [ProjectType.DESIGN]: ProjectType.DESIGN,
  [ProjectType.ELECTRONICS]: ProjectType.ELECTRONICS,
  me: 'me'
}

export * from './technologies'
export * from './projects'
export * from './scopes'
export * from './software'
export * from './breakpoints'
export * from './github'
