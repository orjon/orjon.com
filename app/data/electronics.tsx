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
    technologies: [Technology.electronics, Technology.pic, Technology.html, Technology.sass, Technology.javascript, Technology.jquery],
    repo: 'timeframe.web'
  },
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'colortwo',
    title: 'ColorTwo',
    demo: {
      url: '/demo/colortwo/index.html',
      note: <><span className='font-bold'>x1000 speed</span> [3.6 secs = 1 hour]</>,
    },
    images: [],
    description: {
      top: 'Abstract color clock.',
      bottom: ''
    },
    technologies: [Technology.electronics, Technology.arduino, Technology.html, Technology.sass, Technology.javascript, Technology.jquery],
    repo: 'colortwo.web'
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
      note: <><span className='font-bold'>x1000 speed</span> [3.6 secs = 1 hour]</>,
    },
    images: [],
    technologies: [Technology.electronics, Technology.arduino, Technology.html, Technology.sass, Technology.javascript, Technology.jquery],
    repo: 'colorone.web'
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
    technologies: [Technology.iot, Technology.electronics, Technology.pic, Technology.esp32, Technology.html, Technology.sass, Technology.javascript, Technology.jquery],
    repo: 'abouttime'
  }
]