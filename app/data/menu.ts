import { sections } from '@/app/types'

export const menuItems = [
  {
    name: sections.code,
    icon: 'code'
  },
  {
    name: sections.design,
    icon: 'design'
  },
  {
    name: sections.electronics,
    icon: 'electronics'
  },
  {
    name: sections.me,
    icon: 'face',
    titleBar: true
  }
]

export const views = {
  TILES: 'tiles',
  CARDS: 'cards',
  CAROUSEL: 'carousel'
}
