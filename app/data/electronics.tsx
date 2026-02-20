import { ElectronicsProject, ProjectType, Technology } from '@/app/types'

export const ELECTRONICS_PROJECT_KEY = 'electronics'

export const electronicsProjects: ElectronicsProject[] = [
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'timeframe',
    title: 'Time Frame',
    description: {
      top: 'Random pattern clock.',
      bottom: ''
    },
    demo: '/demo/timeframe/index.html',
    technologies: [Technology.Electronics, Technology.PIC, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    repo: 'timeframe.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'colorone',
    title: 'ColorOne',
    description: {
      top: 'Minimalist color clock.',
      bottom: ''
    },
    demo: '/demo/colorone/index.html',
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    repo: 'colorone.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'colortwo',
    title: 'ColorTwo',
    demo: '/demo/colortwo/index.html',
    description: {
      top: 'Abstract color clock.',
      bottom: ''
    },
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    repo: 'colortwo.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'abouttime',
    title: 'About Time',
    description: {
      top: 'Approximate clock.',
      bottom: ''
    },
    technologies: [Technology.Electronics, Technology.PIC, Technology.ESP32, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    repo: 'abouttime'
  }
]