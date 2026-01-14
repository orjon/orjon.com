import { Project, Technology } from './app/types'

const projects: Project[] = [
  {
    slug: 'buttonStyler',
    title: 'Button styler & CSS generator',
    technologies: [
      Technology.React,
      Technology.Redux,
      Technology.CSS,
      Technology.Sass
    ],
    github: 'https://github.com/orjon/buttonstyler',
    live: 'https://www.orjon.com/buttonstyler',
    icon: '../orjon/images/buttonStyler.png'
  },
  {
    slug: 'covidTracker',
    title: 'Covid19 stats tracker.',
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
    live: 'https://www.orjon.com/covid19',
    icon: '../orjon/images/covid19tracker.jpg'
  },
  {
    slug: 'tubeInfo',
    title: 'Full stack real-time London Underground information.',
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
    live: 'https://www.orjon.com/tubeinfo/',
    icon: '../orjon/images/thetube.png'
  },
  {
    slug: 'tetris',
    title:
      "Modern interpretation of the classic 1980's puzzle game with original styling and music.",
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/tetris',
    live: 'https://www.orjon.com/tetris/',
    icon: '../orjon/images/tetris.png'
  },
  {
    slug: 'colorClock',
    title: 'Unique interactive colour-clock.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/colorclock',
    live: 'https://www.orjon.com/colorclock/',
    icon: '../orjon/images/clock.png'
  },
  {
    slug: 'department3D',
    title: 'Department3D company website',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/department3D',
    live: 'http://www.department3D.com',
    icon: '../orjon/images/department3D.png'
  },
  {
    slug: 'whackAMole',
    title:
      'Whack-a-Mole game. How many little critters can you get in 60 seconds?',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/whack-a-mole',
    live: 'https://www.orjon.com/mole/',
    icon: '../orjon/images/whackamole.png'
  },
  {
    slug: 'weather',
    title: 'Interactive weather map.',
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
    live: 'https://www.orjon.com/weather/',
    icon: '../orjon/images/weather.png'
  },
  {
    slug: 'stripedHorse',
    title: 'Striped Horse Resources company website',
    technologies: [Technology.React, Technology.Sass],
    github: 'https://github.com/orjon/striped-horse',
    live: 'http://www.striped-horse.com',
    icon: '../orjon/images/stripedHorse.png'
  },
  {
    slug: 'countries',
    title: 'World country list with flag, statistics and wiki links.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery,
      Technology.Ajax
    ],
    github: 'https://github.com/orjon/countries',
    live: 'https://www.orjon.com/countries/',
    icon: '../orjon/images/countries.png'
  },
  {
    slug: 'project4',
    title: 'Full stack book-keeping application with unique navigation.',
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
    live: 'https://www.orjon.com/project4/',
    icon: '../orjon/images/project4.png'
  },
  {
    slug: 'rockPaperScissors',
    title: 'Rock Paper Scissors & Rock Paper Scissors Lizard Spock games.',
    technologies: [Technology.HTML, Technology.Sass, Technology.JavaScript],
    github: 'https://github.com/orjon/RockPaperScissors',
    live: 'https://www.orjon.com/rockpaperscissors/',
    icon: '../orjon/images/hand_select_rock-white.png'
  },
  {
    slug: 'orjoncom',
    title: 'This portfolio website',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/orjon.com',
    live: './',
    icon: '../orjon/images/orjoncom.png'
  },
  {
    slug: 'booker',
    title: 'Full stack social book-sharing application.',
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
    live: 'https://www.orjon.com/booker/',
    icon: '../orjon/images/booker.png'
  },
  {
    slug: 'daftpunk',
    title: 'Daft Punk sample trigger-board with adjustable playback speed.',
    technologies: [Technology.HTML, Technology.CSS, Technology.JavaScript],
    github: 'https://github.com/orjon/daftpunk',
    live: 'https://www.orjon.com/daftpunk/',
    icon: '../orjon/images/daftpunk.png'
  }
]
