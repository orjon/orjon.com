import { ElectronicsProject, Technology } from '@/app/types'

export const ELECTRONICS_PROJECT_KEY = 'electronics'

export const electronicsProjects: ElectronicsProject[] = [
  {
    slug: 'timeFrame',
    title: 'Time Frame',
    description: 'Random pattern clock.',
    technologies: [Technology.Electronics, Technology.PIC, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/timeframe.web',
    icon: '/tiles/timeFrame.png'
  },
  {
    slug: 'colorone',
    title: 'ColorOne',
    description: 'Minimalist color clock.',
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/colorone.web',
    icon: '/tiles/colorOne.png'
  },
  {
    slug: 'colortwo',
    title: 'ColorTwo',
    description: 'Abstract color clock.',
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/colortwo.web',
    icon: '/tiles/colorTwo.png'
  },
  {
    slug: 'aboutTime',
    title: 'About Time',
    description: 'Approximate clock.',
    technologies: [Technology.Electronics, Technology.PIC, Technology.ESP32, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/abouttime',
    icon: '/tiles/aboutTime.png'
  }
]