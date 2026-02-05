import { ElectronicsProject, Technology } from '@/app/types'

export const ELECTRONICS_PROJECT_KEY = 'electronics'

export const electronicsProjects: ElectronicsProject[] = [
  {
    slug: 'timeFrame',
    title: 'Time Frame',
    description: 'Random pattern clock.',
    technologies: [Technology.Electronics, Technology.PIC, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/timeframe.web',
    icon: '/tiles/timeFrame.png',
    images: ['timeFrame_circuit.jpg', 'timeFrame_explain1.jpg', 'timeFrame_explain2.jpg', 'timeFrame_explain3.jpg', 'timeFrame_explain4.jpg']
  },
  {
    slug: 'colorone',
    title: 'ColorOne',
    description: 'Minimalist color clock.',
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/colorone.web',
    icon: '/tiles/colorOne.png',
    images: []
  },
  {
    slug: 'colortwo',
    title: 'ColorTwo',
    description: 'Abstract color clock.',
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/colortwo.web',
    icon: '/tiles/colorTwo.png',
    images: ['colorTwo_explode01.jpg', 'colorTwo_explode07.jpg', 'colorTwo_explode08.jpg']
  },
  {
    slug: 'aboutTime',
    title: 'About Time',
    description: 'Approximate clock.',
    technologies: [Technology.Electronics, Technology.PIC, Technology.ESP32, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    github: 'https://github.com/orjon/abouttime',
    icon: '/tiles/aboutTime.png',
    images: []
  }
]