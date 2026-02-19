import { ElectronicsProject, ProjectType, Technology } from '@/app/types'

export const ELECTRONICS_PROJECT_KEY = 'electronics'

export const electronicsProjects: ElectronicsProject[] = [
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'timeframe',
    title: 'Time Frame',
    description: 'Random pattern clock.',
    demo: '/demo/timeframe/index.html',
    technologies: [Technology.Electronics, Technology.PIC, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/timeframe.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'colorone',
    title: 'ColorOne',
    description: 'Minimalist color clock.',
    demo: '/demo/colorone/index.html',
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/colorone.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'colortwo',
    title: 'ColorTwo',
    demo: '/demo/colortwo/index.html',
    description: 'Abstract color clock.',
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/colortwo.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'abouttime',
    title: 'About Time',
    description: 'Approximate clock.',
    technologies: [Technology.Electronics, Technology.PIC, Technology.ESP32, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/abouttime'
  }
]