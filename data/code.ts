import { Project, Technology } from '../app/types'

export const projects: Project[] = [
  {
    slug: 'buttonstyler',
    title: 'Button Styler',
    description: 'Button styler & CSS generator',
    technologies: [
      Technology.React,
      Technology.Redux,
      Technology.CSS,
      Technology.Sass
    ],
    github: 'https://github.com/orjon/buttonstyler',
    www: 'https://www.orjon.com/buttonstyler',
    icon: '/tiles/buttonStyler.png'
  },
  {
    slug: 'covid19',
    title: 'Covid19 Tracker',
    description: 'Covid19 stats tracker.',
    technologies: [
      Technology.React,
      Technology.Redux,
      Technology.Node,
      Technology.Chart,
      Technology.MongoDB,
      Technology.Axios,
      Technology.Express,
      Technology.Sass,
      Technology.Heroku
    ],
    github: 'https://github.com/orjon/covid19',
    www: 'https://www.orjon.com/covid19',
    icon: '/tiles/covid19tracker.jpg'
  },
  {
    slug: 'tubeinfo',
    title: 'London Underground Information',
    description: 'Full stack real-time London Underground information.',
    technologies: [
      Technology.React,
      Technology.Redux,
      Technology.Node,
      Technology.Axios,
      Technology.Express,
      Technology.Sass,
      Technology.Heroku,
      Technology.MapBox
    ],
    github: 'https://github.com/orjon/TubeInfo',
    www: 'https://www.orjon.com/tubeinfo/',
    icon: '/tiles/thetube.png'
  },
  {
    slug: 'tetris',
    title: 'Tetris Revisited',
    description:
      "Modern interpretation of the classic 1980's puzzle game with original styling and music.",
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/tetris',
    www: 'https://www.orjon.com/tetris/',
    icon: '/tiles/tetris.png'
  },
  {
    slug: 'colorclock',
    title: 'Colour Clock',
    description: 'Unique interactive colour-clock.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/colorclock',
    www: 'https://www.orjon.com/colorclock/',
    icon: '/tiles/clock.png'
  },
  {
    slug: 'department3D',
    title: 'department3D',
    description: 'Department3D company website',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/department3D',
    www: 'http://www.department3D.com',
    icon: '/tiles/department3D.png'
  },
  {
    slug: 'whackAMole',
    title: 'Whack-a-Mole',
    description:
      'Whack-a-Mole game. How many little critters can you get in 60 seconds?',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/whack-a-mole',
    www: 'https://www.orjon.com/mole/',
    icon: '/tiles/whackamole.png'
  },
  {
    slug: 'weather',
    title: "It's the Weather!",
    description: 'Interactive weather map.',
    technologies: [
      Technology.React,
      Technology.Sass,
      Technology.jQuery,
      Technology.Axios,
      Technology.MapBox,
      Technology.OpenWeatherAPI,
      Technology.Webpack,
      Technology.Yarn
    ],
    github: 'https://github.com/orjon/weather',
    www: 'https://www.orjon.com/weather/',
    icon: '/tiles/weather.png'
  },
  {
    slug: 'stripedHorse',
    title: 'Striped Horse Resources',
    description: 'Striped Horse Resources company website',
    technologies: [Technology.React, Technology.Sass],
    github: 'https://github.com/orjon/striped-horse',
    www: 'http://www.striped-horse.com',
    icon: '/tiles/stripedHorse.png'
  },
  {
    slug: 'countries',
    title: 'World Countries',
    description: 'World country list with flag, statistics and wiki links.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery,
      Technology.Ajax
    ],
    github: 'https://github.com/orjon/countries',
    www: 'https://www.orjon.com/countries/',
    icon: '/tiles/countries.png'
  },
  {
    slug: 'project4',
    title: 'project4',
    description: 'Full stack book-keeping application with unique navigation.',
    technologies: [
      Technology.React,
      Technology.Sass,
      Technology.Python,
      Technology.Flask,
      Technology.Axios,
      Technology.PostgreSQL,
      Technology.SQLAlchemy,
      Technology.Marshmallow,
      Technology.Heroku,
      Technology.Yarn
    ],
    github: 'https://github.com/orjon/project4',
    www: 'https://www.orjon.com/project4/',
    icon: '/tiles/project4.png'
  },
  {
    slug: 'rockPaperScissors',
    title: 'Rock Paper Scissors',
    description:
      'Rock Paper Scissors & Rock Paper Scissors Lizard Spock games.',
    technologies: [Technology.HTML, Technology.Sass, Technology.JavaScript],
    github: 'https://github.com/orjon/RockPaperScissors',
    www: 'https://www.orjon.com/rockpaperscissors/',
    icon: '/tiles/hand_select_rock-white.png'
  },
  {
    slug: 'orjoncom',
    title: 'orjon.com',
    description: 'This portfolio website',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/orjon.com',
    www: './',
    icon: '/tiles/orjoncom.png'
  },
  {
    slug: 'booker',
    title: 'Booker',
    description: 'Full stack social book-sharing application.',
    technologies: [
      Technology.React,
      Technology.MongoDB,
      Technology.Mongoose,
      Technology.Node,
      Technology.Express,
      Technology.Axios,
      Technology.Bulma,
      Technology.MapBox,
      Technology.Yarn
    ],
    github: 'https://github.com/orjon/booker',
    www: 'https://www.orjon.com/booker/',
    icon: '/tiles/booker.png'
  },
  {
    slug: 'daftpunk',
    title: 'Daft Punk Trigger Board',
    description:
      'Daft Punk sample trigger-board with adjustable playback speed.',
    technologies: [Technology.HTML, Technology.CSS, Technology.JavaScript],
    github: 'https://github.com/orjon/daftpunk',
    www: 'https://www.orjon.com/daftpunk/',
    icon: '/tiles/daftpunk.png'
  }
]
