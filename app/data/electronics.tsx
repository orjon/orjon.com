import { ElectronicsProject, ProjectType, Technology } from '@/app/types'
import CurrentTime from '@/app/components/CurrentTime'

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
    demo: {
      url: '/demo/timeframe/index.html',
      note: <>Current time <span className='font-bold'><CurrentTime use12Hour={true} /></span></>,
    },
    images: [],
    technologies: [Technology.Electronics, Technology.PIC, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    repo: 'timeframe.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'colorone',
    title: 'ColorOne',
    description: {
      top: "Minimalist 'single-pixel' color clock.",
      bottom: ''
    },
    demo: {
      url: '/demo/colorone/index.html',
      note: 'x1000 speed [1 hour = 3.6 secs]',
    },
    images: [],
    technologies: [Technology.Electronics, Technology.Arduino, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    repo: 'colorone.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'colortwo',
    title: 'ColorTwo',
    demo: {
      url: '/demo/colortwo/index.html',
      note: 'x1000 speed [1 hour = 3.6 secs]',
    },
    images: [],
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
    demo: {
      url: '/demo/abouttime/index.html',
      note: <>Current time <span className='font-bold'><CurrentTime use12Hour={false} /></span></>,
    },
    images: [],
    technologies: [Technology.Electronics, Technology.PIC, Technology.ESP32, Technology.HTML, Technology.Sass, Technology.JavaScript, Technology.jQuery],
    repo: 'abouttime'
  }
]