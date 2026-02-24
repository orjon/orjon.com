import { DesignProject, Scopes, Software } from '@/app/types'

export const DESIGN_PROJECT_KEY = 'design'

export const designProjects: DesignProject[] = [
  {
    slug: 'cisco2015',
    title: 'Internet of Everything, CiscoLive! 2015',
    subTitle: 'Milan, Italy',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'cisco2015'
  },
  {
    slug: 'nouTable',
    title: 'Angle Desk',
    subTitle: 'Angle Desk',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'nouTable'
  },
  {
    slug: 'foreshore',
    title: 'Foreshore Pedestrian Bridge',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.SketchUp, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'foreshore'
  },
  {
    slug: 'statoil',
    title: 'Statoil',
    subTitle: 'Trondheim, Norway',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'statoil'
  },
  {
    slug: 'emidlands',
    title: 'Aspire Lounge',
    subTitle: 'East Midlands Airport',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'emidlands'
  },
  {
    slug: 'honestlyGood',
    title: 'Honestly Good',
    subTitle: 'London, UK',
    scope: [Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'honestlyGood'
  },
  {
    slug: 'cisco2016',
    title: 'Cisco Campus, CiscoLive! 2016',
    subTitle: 'Berlin, Germany',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'cisco2016'
  },
  {
    slug: 'cisco2017',
    title: 'Cisco Campus, CiscoLive! 2017',
    subTitle: 'Berlin, Germany',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'cisco2017'
  },
  {
    slug: 'chix',
    title: 'Chix',
    subTitle: 'Potchefstroom, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'chix'
  },
  {
    slug: 'chess',
    title: 'XLT Chess Set',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.Animation, Scopes.TechnicalDocumentation, Scopes.ThreeDPrint],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'chess'
  },
  {
    slug: 'bhunga',
    title: 'Bhunga Pedestrian Bridge',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.Animation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'bhunga'
  },
  {
    slug: 'fairmont',
    title: 'Fairmont Apartments',
    subTitle: 'Durban, South Africa',
    scope: [Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'fairmont'
  },
  {
    slug: 'ho1',
    title: 'Copper & Cement',
    subTitle: 'ask Light',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'ho1'
  },
  {
    slug: 'infiniti',
    title: 'Infiniti',
    subTitle: 'London, UK',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'infiniti'
  },
  {
    slug: 'operaHouse',
    title: 'Opera House',
    subTitle: 'Manama, Bahrain',
    scope: [Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'operaHouse'
  },
  {
    slug: 'knife',
    title: 'Knife',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'knife'
  },
  {
    slug: 'knifePlan',
    title: 'Knife',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'knifePlan'
  },
  {
    slug: 'laptopStand',
    title: 'Ikea Lapstånd',
    subTitle: 'A4 flatpack laptop stand',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'laptopStand'
  },
  {
    slug: 'office01',
    title: 'Office.01',
    subTitle: 'Reticulated Office Furniture',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'office01'
  },
  {
    slug: 'oman',
    title: 'Al Madina A Zarqa',
    subTitle: 'Blue City,Oman',
    scope: [Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'oman'
  },
  {
    slug: 'ortBridge',
    title: 'O.R.Tambo Airport Pedestrian Bridge',
    subTitle: 'Johannesburg, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'ortBridge'
  },
  {
    slug: 'redBull',
    title: 'Red Bull Offices',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'redBull'
  },
  {
    slug: 'samsung',
    title: 'Samsung Galaxy Launch',
    subTitle: 'Berlin, Germany',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'samsung'
  },
  {
    slug: 'powerBuoy',
    title: 'Power Buoy',
    subTitle: 'Floating power generator',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'powerBuoy'
  },
  {
    slug: 'sony',
    title: 'Sony Building Signage',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'sony'
  },
  {
    slug: 'winxo',
    title: 'Winxo HQ Signage',
    subTitle: 'Casablanca, Morocco',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'winxo'
  },
  {
    slug: 't2Snooze',
    title: 'Swissport Snooze Lounge',
    subTitle: 'Heathrow Terminal 2',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 't2Snooze'
  },
  {
    slug: 'vamiziPlan',
    title: 'Vamizi Villa Plan',
    subTitle: 'Vamizi Island, Mozambique',
    scope: [Scopes.Visualisation],
    software: [Software.AutoCAD, Software.Photoshop],
    image: 'vamiziPlan'
  },
  {
    slug: 'kite',
    title: 'Kite Buddy ',
    subTitle: 'Motorized kite launching handles',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'kite'
  },
  {
    slug: 'hermanus',
    title: 'Hermanus Market Stalls',
    subTitle: 'Hermanus, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'hermanus'
  }
]
