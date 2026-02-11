import { DesignProject, Scopes, Software } from '@/app/types'

export const DESIGN_PROJECT_KEY = 'design'

export const designProjects: DesignProject[] = [
  {
    slug: 'cisco2015',
    title: 'Internet of Everything, CiscoLive! 2015',
    subTitle: 'Milan, Italy',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/cisco2015.png'
  },
  {
    slug: 'nouTable',
    title: 'Angle Desk',
    subTitle: 'Angle Desk',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/nouTable.png'
  },
  {
    slug: 'foreshore',
    title: 'Foreshore Pedestrian Bridge',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.SketchUp, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/foreshore.png'
  },
  {
    slug: 'statoil',
    title: 'Statoil',
    subTitle: 'Trondheim, Norway',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/statoil.png'
  },
  {
    slug: 'emidlands',
    title: 'Aspire Lounge',
    subTitle: 'East Midlands Airport',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/emidlands.png'
  },
  {
    slug: 'honestlyGood',
    title: 'Honestly Good',
    subTitle: 'London, UK',
    scope: [Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/honestlyGood.png'
  },
  {
    slug: 'cisco2016',
    title: 'Cisco Campus, CiscoLive! 2016',
    subTitle: 'Berlin, Germany',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/cisco2016.png'
  },
  {
    slug: 'cisco2017',
    title: 'Cisco Campus, CiscoLive! 2017',
    subTitle: 'Berlin, Germany',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/cisco2017.png'
  },
  {
    slug: 'chix',
    title: 'Chix',
    subTitle: 'Potchefstroom, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/chix.png'
  },
  {
    slug: 'chess',
    title: 'XLT Chess Set',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.Animation, Scopes.TechnicalDocumentation, Scopes.ThreeDPrint],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/chess.png'
  },
  {
    slug: 'bhunga',
    title: 'Bhunga Pedestrian Bridge',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.Animation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/bhunga.png'
  },
  {
    slug: 'fairmont',
    title: 'Fairmont Apartments',
    subTitle: 'Durban, South Africa',
    scope: [Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/fairmont.png'
  },
  {
    slug: 'ho1',
    title: 'Copper & Cement',
    subTitle: 'ask Light',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/ho1.png'
  },
  {
    slug: 'infiniti',
    title: 'Infiniti',
    subTitle: 'London, UK',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/infiniti.png'
  },
  {
    slug: 'operaHouse',
    title: 'Opera House',
    subTitle: 'Manama, Bahrain',
    scope: [Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/operaHouse.png'
  },
  {
    slug: 'knife',
    title: 'Knife',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/knife.png'
  },
  {
    slug: 'knifePlan',
    title: 'Knife',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/knifePlan.png'
  },
  {
    slug: 'laptopStand',
    title: 'Ikea Lapstånd',
    subTitle: 'A4 flatpack laptop stand',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/laptopStand.png'
  },
  {
    slug: 'office01',
    title: 'Office.01',
    subTitle: 'Reticulated Office Furniture',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/office01.png'
  },
  {
    slug: 'oman',
    title: 'Al Madina A Zarqa',
    subTitle: 'Blue City,Oman',
    scope: [Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/oman.png'
  },
  {
    slug: 'ortBridge',
    title: 'O.R.Tambo Airport Pedestrian Bridge',
    subTitle: 'Johannesburg, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/ortBridge.png'
  },
  {
    slug: 'redBull',
    title: 'Red Bull Offices',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/redBull.png'
  },
  {
    slug: 'samsung',
    title: 'Samsung Galaxy Launch',
    subTitle: 'Berlin, Germany',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/samsung.png'
  },
  {
    slug: 'powerBuoy',
    title: 'Power Buoy',
    subTitle: 'Floating power generator',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/powerBuoy.png'
  },
  {
    slug: 'sony',
    title: 'Sony Building Signage',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: '/images/design/sony.png'
  },
  {
    slug: 'winxo',
    title: 'Winxo HQ Signage',
    subTitle: 'Casablanca, Morocco',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/winxo.png'
  },
  {
    slug: 't2Snooze',
    title: 'Swissport Snooze Lounge',
    subTitle: 'Heathrow Terminal 2',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/t2Snooze.png'
  },
  {
    slug: 'vamiziPlan',
    title: 'Vamizi Villa Plan',
    subTitle: 'Vamizi Island, Mozambique',
    scope: [Scopes.Visualisation],
    software: [Software.AutoCAD, Software.Photoshop],
    image: '/images/design/vamiziPlan.png'
  },
  {
    slug: 'kite',
    title: 'Kite Buddy ',
    subTitle: 'Motorized kite launching handles',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/kite.png'
  },
  {
    slug: 'hermanus',
    title: 'Hermanus Market Stalls',
    subTitle: 'Hermanus, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: '/images/design/hermanus.png'
  }
]
