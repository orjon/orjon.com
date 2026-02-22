import { ProjectType, CodeProject, Technology } from '@/app/types'

export const codeProjects: CodeProject[] = [
  {
    projectType: ProjectType.CODE,
    slug: 'buttonstyler',
    title: 'Button Styler',
    description: {
      top: 'An interactive tool for styling buttons to be used in development projects.',
      bottom: 'Adjust size, color, text and border styles, corner radii, and shadows through a structured interface that displays changes and the corresponding CSS in real time.\nThe generated CSS is ready to copy directly into your project.'
    },
    images: [],
    technologies: [
      Technology.React,
      Technology.Redux,
      Technology.CSS,
      Technology.Sass
    ],
    repo: 'buttonstyler',
    www: 'https://www.orjon.com/buttonstyler',
    responsive: false
  },
  {
    projectType: ProjectType.CODE,
    slug: 'covid19',
    title: 'Covid19 Tracker',
    description: {
      top: 'Developed during the COVID-19 pandemic, this application visualizes global COVID-19 case and death data.',
      bottom: 'Users can select up to five countries to generate a comparative graph, enabling clear side-by-side analysis of trends over time. Registered users’ selected countries are saved and automatically reloaded when revisiting the site - feature overkill, but I had some time on my hands…'
    },
    note: 'The source API stopped providing new data on 7 March 2023; as a result, the dataset is now static and no longer updates.',
    images: [],
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
    repo: 'covid19',
    www: 'https://www.orjon.com/covid19',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'tubeinfo',
    title: 'London Underground Information',
    description: {
      top: 'Full stack real-time London Underground information.',
      bottom: ''
    },
    images: [],
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
    repo: 'TubeInfo',
    www: 'https://www.orjon.com/tubeinfo/',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'tetris',
    title: 'Tetris Revisited',
    description: {
      top: 'Tetris is a recreation of the original 1980’s classic puzzle game.',
      bottom: 'Position falling blocks, of differing shapes, trying to complete horizontal lines in order to clear them from the grid. Points are awarded for each block placed, and every line cleared.\nThe speed at which blocks fall increases with the player’s score. The game ends when a player’s blocks reach the top of the grid.'
    },
    note: 'The music and sound effects were kindly written for the game by Joe Lewis.',
    images: [],
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    repo: 'tetris',
    www: 'https://www.orjon.com/tetris/',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'colorclock',
    title: 'Colour Clock',
    description: {
      top: 'A novel clock representing the time using just color.',
      bottom: 'The dragable hour indicators can be rotated to freely shift the current time’s color whilst still remaining accurate.\nI have also built a working physical version of this clock.'
    },
    images: [],
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    repo: 'colorclock',
    www: 'https://www.orjon.com/colorclock/',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'department3d',
    title: 'department3D',
    description: {
      top: 'Image-rich company website with clean, minimal navigation and responsive styling.',
      bottom: ''
    },
    images: [],
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    repo: 'department3D',
    www: 'http://www.department3D.com',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'whackamole',
    title: 'Whack-a-Mole',
    description: {
      top: 'A 60-second, fast-paced whack-a-mole game with forced-perspective and gratuitously macabre graphics. Hammer popping-up moles before they vanish in this darkly playful test of reflexes.',
      bottom: ''
    },
    images: [],
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    repo: 'whack-a-mole',
    www: 'https://www.orjon.com/mole/',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'weather',
    title: "It's the Weather!",
    description: {
      top: 'Explore the world’s weather at a glance with this interactive map.',
      bottom: 'Select a location to see detailed localized weather information, with clear, intuitive icons representing temperature, precipitation, and other conditions in real time.'
    },
    note: 'Update 2019-06-30: Originally this application displayed global weather data. A change in the OpenWeatherMap API now limits free weather data to 25 square degrees.',
    images: [],
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
    repo: 'weather',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'stripedhorse',
    title: 'Striped Horse Resources',
    description: {
      top: 'Corporate website for Striped Horse Resources Limited.',
      bottom: ''
    },
    images: [],
    technologies: [Technology.React, Technology.Sass],
    repo: 'striped-horse',
    www: 'http://www.striped-horse.com',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'countries',
    title: 'World Countries',
    description: {
      top: 'Search and filter a comprehensive list of countries, complete with flags and key statistics with links to relevant Wikipedia articles for more detailed information.',
      bottom: ''
    },
    images: [],
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery,
      Technology.Ajax
    ],
    repo: 'World-Countries',
    www: 'https://www.orjon.com/countries/',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'project4',
    title: 'project4',
    description: {
      top: 'Full stack book-keeping application with unique navigation.',
      bottom: ''
    },
    images: [],
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
    repo: 'project4',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'rockpaperscissors',
    title: 'Rock Paper Scissors',
    description: {
      top: 'Rock Paper Scissors & Rock Paper Scissors Lizard Spock games.',
      bottom: ''
    },
    images: [],
    technologies: [Technology.HTML, Technology.Sass, Technology.JavaScript],
    repo: 'RockPaperScissors',
    www: 'https://www.orjon.com/rockpaperscissors/',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'orjoncom',
    title: 'orjon.com',
    description: {
      top: 'This portfolio website',
      bottom: ''
    },
    images: [],
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    repo: 'orjon.com',
    www: 'https://www.orjon.com/',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'booker',
    title: 'Booker',
    description: {
      top: 'Full stack social book-sharing application.',
      bottom: ''
    },
    images: [],
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
    repo: 'booker',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'daftpunk',
    title: 'Daft Punk Trigger Board',
    description: {
      top: 'Daft Punk sample trigger-board with adjustable playback speed.',
      bottom: ''
    },
    images: [],
    technologies: [Technology.HTML, Technology.CSS, Technology.JavaScript],
    repo: 'daftpunk',
    www: 'https://www.orjon.com/daftpunk/',
    responsive: false
  }
]
