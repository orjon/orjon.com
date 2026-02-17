import { CodeProject, Technology } from '@/app/types'

export const codeProjects: CodeProject[] = [
  {
    type: 'code',
    slug: 'buttonstyler',
    title: 'Button Styler',
    // description: 'Button styler & CSS generator',
    description: 'A development tool for styling buttons using commonly used CSS properties.\nAdjust size, color, text and border styles, corner radii, and shadows through a structured interface that displays changes and the corresponding CSS in real time. The generated CSS is ready to copy directly into your project.\nDesigned to streamline styling workflows and reduce CSS guesswork.',
    technologies: [
      Technology.React,
      Technology.Redux,
      Technology.CSS,
      Technology.Sass
    ],
    github: 'https://github.com/orjon/buttonstyler',
    www: 'https://www.orjon.com/buttonstyler',
    responsive: false
  },
  {
    type: 'code',
    slug: 'covid19',
    title: 'Covid19 Tracker',
    description: 'Developed during the COVID-19 pandemic, this application visualizes global COVID-19 case and death data.\nUsers can select up to five countries to generate a comparative graph, enabling clear side-by-side analysis of trends over time. Registered users’ selected countries are saved and automatically reloaded when revisiting the site - feature overkill, but I had some time on my hands…',
    note: 'The source API stopped providing new data on 7 March 2023; as a result, the dataset is now static and no longer updates.',
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
    responsive: true
  },
  {
    type: 'code',
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
    responsive: true
  },
  {
    type: 'code',
    slug: 'tetris',
    title: 'Tetris Revisited',
    description:
      'Tetris is a recreation of the original 1980’s classic puzzle game.\nPosition falling blocks, of differing shapes, trying to complete horizontal lines in order to clear them from the grid. Points are awarded for each block placed, and every line cleared.\nThe speed at which blocks fall increases with the player’s score. The game ends when a player’s blocks reach the top of the grid.\nThe music and sound effects were kindly written for the game by Joe Lewis.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/tetris',
    www: 'https://www.orjon.com/tetris/',
    responsive: true
  },
  {
    type: 'code',
    slug: 'colorclock',
    title: 'Colour Clock',
    description: 'A novel clock representing the time using just color.\nThe dragable hour indicators can be rotated to freely shift the current time’s color whilst still remaining accurate.\nI have also built a working physical version of this clock.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/colorclock',
    www: 'https://www.orjon.com/colorclock/',
    responsive: true
  },
  {
    type: 'code',
    slug: 'department3d',
    title: 'department3D',
    description: 'Image-rich company website with clean and minimal responsive styling.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/department3D',
    www: 'http://www.department3D.com',
    responsive: true
  },
  {
    type: 'code',
    slug: 'whackamole',
    title: 'Whack-a-Mole',
    description: 'A 60-second, fast-paced whack-a-mole game with forced-perspective and gratuitously macabre graphics. Hammer popping-up moles before they vanish in this darkly playful test of reflexes.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery
    ],
    github: 'https://github.com/orjon/whack-a-mole',
    www: 'https://www.orjon.com/mole/',
    responsive: true
  },
  {
    type: 'code',
    slug: 'weather',
    title: "It's the Weather!",
    description: 'Explore the world’s weather at a glance with this interactive map.\nSelect a location to see detailed localized weather information, with clear, intuitive icons representing temperature, precipitation, and other conditions in real time.',
    note: 'Update 2019-06-30: Originally this application displayed global weather data. A change in the OpenWeatherMap API now limits free weather data to 25 square degrees.',
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
    responsive: true
  },
  {
    type: 'code',
    slug: 'stripedhorse',
    title: 'Striped Horse Resources',
    description: 'Corporate website for Striped Horse Resources Limited.',
    technologies: [Technology.React, Technology.Sass],
    github: 'https://github.com/orjon/striped-horse',
    www: 'http://www.striped-horse.com',
    responsive: true
  },
  {
    type: 'code',
    slug: 'countries',
    title: 'World Countries',
    description: 'Search and filter a comprehensive list of countries, complete with flags and key statistics with links to relevant Wikipedia articles for more detailed information.',
    technologies: [
      Technology.HTML,
      Technology.Sass,
      Technology.JavaScript,
      Technology.jQuery,
      Technology.Ajax
    ],
    github: 'https://github.com/orjon/countries',
    www: 'https://www.orjon.com/countries/',
    responsive: true
  },
  {
    type: 'code',
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
    responsive: true
  },
  {
    type: 'code',
    slug: 'rockpaperscissors',
    title: 'Rock Paper Scissors',
    description:
      'Rock Paper Scissors & Rock Paper Scissors Lizard Spock games.',
    technologies: [Technology.HTML, Technology.Sass, Technology.JavaScript],
    github: 'https://github.com/orjon/RockPaperScissors',
    www: 'https://www.orjon.com/rockpaperscissors/',
    responsive: true
  },
  {
    type: 'code',
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
    responsive: true
  },
  {
    type: 'code',
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
    responsive: true
  },
  {
    type: 'code',
    slug: 'daftpunk',
    title: 'Daft Punk Trigger Board',
    description:
      'Daft Punk sample trigger-board with adjustable playback speed.',
    technologies: [Technology.HTML, Technology.CSS, Technology.JavaScript],
    github: 'https://github.com/orjon/daftpunk',
    www: 'https://www.orjon.com/daftpunk/',
    responsive: false
  }
]
