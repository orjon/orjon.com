import { Sections } from '@/app/types'

export const menuItems = [
  {
    name: Sections.CODE,
    icon: 'code'
  },
  {
    name: Sections.DESIGN,
    icon: 'design'
  },
  {
    name: Sections.ELECTRONICS,
    icon: 'electronics'
  },
  {
    name: Sections.ME,
    icon: 'face',
    titleBar: true
  }
]

export const views = {
  TILES: 'tiles',
  CARDS: 'cards',
  CAROUSEL: 'carousel'
}
