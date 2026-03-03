import { ElectronicsProject, ProjectType, Technology } from '@/app/types'
import CurrentTime from '@/app/components/CurrentTime'

export const electronicsProjects: ElectronicsProject[] = [
  {
    projectType: ProjectType.ELECTRONICS,
    slug: 'timeframe',
    title: 'Time Frame',
    description: {
      top: 'Random pattern clock.',
      bottom: 'Time Frame displays seemingly random patterns that represent the current time. The time is split into hours, tens of minutes, and minutes, each represented by a randomly generated pattern of blue squares.\nExample: 10:34 = 10–3–4, with the hours pattern illuminated for longer to indicate the start of the sequence.'
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
      bottom: 'The centre of this clock gradually cycles through the color spectrum over a 12 hour period. At the top of each hour the central colour will precisely match the corresponsing hour indicator, allowing for surpisingly accurate time estimation.'
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
      bottom: 'This clock gradually cycles through the color spectrum over a 12 hour period.'
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
      bottom: 'This digital clock displays the current time with ...some ambiguity.'
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