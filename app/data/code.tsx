import { ProjectType, CodeProject, Technology } from '@/app/types'

export const codeProjects: CodeProject[] = [
  {
    projectType: ProjectType.CODE,
    slug: 'buttonstyler',
    title: 'Button Styler',
    description: {
      top: "A tool for styling buttons and CTA's to be used in development projects.",
      bottom: 'Adjust size, color, text and border styles, corner radii, and shadows through a structured interface that displays changes and the corresponding CSS in real time.\nThe generated CSS is ready to copy directly into your project.'
    },
    images: [],
    technologies: [
      Technology.react,
      Technology.redux,
      Technology.css,
      Technology.sass
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
      Technology.react,
      Technology.redux,
      Technology.node,
      Technology.chart,
      Technology.mongodb,
      Technology.axios,
      Technology.express,
      Technology.sass,
      Technology.heroku
    ],
    repo: 'covid19',
    www: 'https://www.orjon.com/covid19',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'tubeinfo',
    title: 'Tube Info',
    description: {
      top: 'A handy little app for getting real-time London Underground information.',
      bottom: 'Uses the TfL Open Data API to get the real-time information about the London Underground networks. You can see the status of each line, and expected arrival times for each line serving a selected station.\nDetailed information is displayed for each station, including station address, facilities, and an interactive map of the surrounding area.\nTo limit API usage, resquest responses are cached on the server for a given period of time.'
    },
    images: [],
    note: 'Powered by TfL Open Data',
    technologies: [
      Technology.react,
      Technology.redux,
      Technology.node,
      Technology.axios,
      Technology.express,
      Technology.sass,
      Technology.heroku,
      Technology.mapbox
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
      Technology.html,
      Technology.sass,
      Technology.javascript,
      Technology.jquery
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
      Technology.html,
      Technology.sass,
      Technology.javascript,
      Technology.jquery
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
      top: 'Image-rich company website with a simple, clean navigation system and responsive styling.',
      bottom: 'Department3D is design and visualisation services company  - they wanted images of their work to do the talking.'
    },
    images: [],
    technologies: [
      Technology.html,
      Technology.sass,
      Technology.javascript,
      Technology.jquery
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
      top: 'A 60-second, fast-paced whack-a-mole game with forced-perspective and gratuitously macabre graphics.',
      bottom: 'A simple little game built for fun some time ago.'
    },
    images: [],
    technologies: [
      Technology.html,
      Technology.sass,
      Technology.javascript,
      Technology.jquery
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
      Technology.react,
      Technology.sass,
      Technology.axios,
      Technology.mapbox,
      Technology.openweatherapi,
      Technology.webpack,
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
    technologies: [Technology.react, Technology.sass],
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
      Technology.html,
      Technology.sass,
      Technology.javascript,
      Technology.jquery,
      Technology.ajax
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
      top: 'A book-keeping application for small businesses.',
      bottom: 'Allows users to track invoices, payments, and expenses - with a uniuqe everything-is-clickable interface.'
    },
    images: [],
    technologies: [
      Technology.react,
      Technology.sass,
      Technology.python,
      Technology.flask,
      Technology.axios,
      Technology.postgresql,
      Technology.sqlalchemy,
      Technology.marshmallow,
      Technology.heroku,
    ],
    repo: 'project4',
    responsive: true
  },
  {
    projectType: ProjectType.CODE,
    slug: 'rockpaperscissors',
    title: 'Rock Paper Scissors',
    description: {
      top: 'Rock Paper Scissors game.',
      bottom: "A simple little game with a bold interface. Trekies can also select to play Rock Paper Scissors Lizard Spock."
    },
    images: [],
    technologies: [Technology.html, Technology.sass, Technology.javascript],
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
      bottom: 'This portfolio website has been live and actively maintained since 2001.'
    },
    images: [],
    technologies: [
      Technology.next,
      Technology.react,
      Technology.tailwind,
      Technology.typescript,
      Technology.emblaCarousel
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
      top: 'Book-sharing application.',
      bottom: 'Users share their book collections with other users of the platform. Registered users upload their book collections to the platform which other users can then browse and request to borrow.'
    },
    note: 'This was a group project built at General Assembly.',
    images: [],
    technologies: [
      Technology.react,
      Technology.mongodb,
      Technology.mongoose,
      Technology.node,
      Technology.express,
      Technology.axios,
      Technology.bulma,
      Technology.mapbox
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
    technologies: [Technology.html, Technology.css, Technology.javascript],
    repo: 'daftpunk',
    www: 'https://www.orjon.com/daftpunk/',
    responsive: false
  }
]
