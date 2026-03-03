import { DesignProject, ProjectType, Scopes, Software } from '@/app/types'

export const designProjects: DesignProject[] = [
  {
    projectType: ProjectType.DESIGN,
    slug: 'cisco2015',
    title: 'Cisco - Internet of Everything',
    subTitle: 'Exhibition stand at CiscoLive! 2015 in Milan.',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'cisco2015'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'kite',
    title: 'Kite Buddy ',
    subTitle: 'Motorized kite launching handles',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'kite'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'nouTable',
    title: 'Angle Desk',
    subTitle: 'Bespoke desk design with custom folded sheet-metal leg brackets.',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'nouTable'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'foreshore',
    title: 'Foreshore Pedestrian Bridge',
    subTitle: 'Pedestrian bridge in Cape Town city centre.',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.SketchUp, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'foreshore',
    mapUrl: 'https://www.google.com/maps/place/Bhunga+Ave,+Cape+Town,+South+Africa/@-33.9152661,18.4238228,3a,75y,42.92h,97.36t/data=!3m7!1e1!3m5!1sL5buaSqkBGgoO_dZHYjuWg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-7.3557917360997465%26panoid%3DL5buaSqkBGgoO_dZHYjuWg%26yaw%3D42.91826237908957!7i16384!8i8192!4m6!3m5!1s0x1dcc5ca186c8e395:0x9833f7c437bbe469!8m2!3d-33.9496966!4d18.5158958!16s%2Fg%2F1wk0b5pb?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'cisco2016',
    title: 'Cisco Campus',
    subTitle: 'Exhibition stand at CiscoLive! 2016 in Berlin.',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'cisco2016'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'bhunga',
    title: 'Bhunga Pedestrian Bridge',
    subTitle: 'Widening of existing bridge to safely accommodate pedestrians oer N1  Cape Town, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.Animation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'bhunga',
    mapUrl: 'https://www.google.com/maps/place/Bhunga+Ave,+Cape+Town,+South+Africa/@-33.9503323,18.522028,3a,75y,287.28h,93.22t/data=!3m7!1e1!3m5!1sVTHhUrOdx_gW3dq7ylMsMg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.2231606213562145%26panoid%3DVTHhUrOdx_gW3dq7ylMsMg%26yaw%3D287.27909834126416!7i16384!8i8192!4m6!3m5!1s0x1dcc5ca186c8e395:0x9833f7c437bbe469!8m2!3d-33.9496966!4d18.5158958!16s%2Fg%2F1wk0b5pb?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'operaHouse',
    title: 'Opera House',
    subTitle: 'Manama, Bahrain',
    scope: [Scopes.Visualisation],
    software: [Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'operaHouse'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'knife',
    title: 'Knife',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'knife'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'office01',
    title: 'Office.01',
    subTitle: 'Reticulated Office Furniture',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'office01'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'ortBridge',
    title: 'O.R.Tambo Airport Pedestrian Bridge',
    subTitle: 'Johannesburg, South Africa',
    scope: [Scopes.Design, Scopes.Visualisation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'ortBridge'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'redBull',
    title: 'Red Bull Offices',
    subTitle: 'Cape Town, South Africa',
    scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
    image: 'redBull'
  },
  {
    projectType: ProjectType.DESIGN,
    slug: 'powerBuoy',
    title: 'Power Buoy',
    subTitle: 'Floating power generator',
    scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
    software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
    image: 'powerBuoy'
  },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'statoil',
  //   title: 'Statoil',
  //   subTitle: 'Trondheim, Norway',
  //   scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation],
  //   software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'statoil'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'emidlands',
  //   title: 'Aspire Lounge',
  //   subTitle: 'East Midlands Airport',
  //   scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'emidlands'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'honestlyGood',
  //   title: 'Honestly Good',
  //   subTitle: 'London, UK',
  //   scope: [Scopes.Visualisation],
  //   software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'honestlyGood'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'cisco2017',
  //   title: 'Cisco Campus, CiscoLive! 2017',
  //   subTitle: 'Berlin, Germany',
  //   scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'cisco2017'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'chix',
  //   title: 'Chix',
  //   subTitle: 'Potchefstroom, South Africa',
  //   scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
  //   image: 'chix'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'chess',
  //   title: 'XLT Chess Set',
  //   scope: [Scopes.Design, Scopes.Visualisation, Scopes.Animation, Scopes.TechnicalDocumentation, Scopes.ThreeDPrint],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'chess'
  // },

  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'fairmont',
  //   title: 'Fairmont Apartments',
  //   subTitle: 'Durban, South Africa',
  //   scope: [Scopes.Visualisation],
  //   software: [Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
  //   image: 'fairmont'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'ho1',
  //   title: 'Copper & Cement',
  //   subTitle: 'ask Light',
  //   scope: [Scopes.Design, Scopes.Visualisation],
  //   software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'ho1'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'infiniti',
  //   title: 'Infiniti',
  //   subTitle: 'London, UK',
  //   scope: [Scopes.Design, Scopes.Visualisation],
  //   software: [Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'infiniti'
  // },

  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'knifePlan',
  //   title: 'Knife',
  //   subTitle: 'Cape Town, South Africa',
  //   scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation, Scopes.OnSiteSupervision],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
  //   image: 'knifePlan'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'laptopStand',
  //   title: 'Ikea Lapstånd',
  //   subTitle: 'A4 flatpack laptop stand',
  //   scope: [Scopes.Design, Scopes.Visualisation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'laptopStand'
  // },

  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'oman',
  //   title: 'Al Madina A Zarqa',
  //   subTitle: 'Blue City,Oman',
  //   scope: [Scopes.Visualisation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'oman'
  // },

  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'samsung',
  //   title: 'Samsung Galaxy Launch',
  //   subTitle: 'Berlin, Germany',
  //   scope: [Scopes.Design, Scopes.Visualisation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'samsung'
  // },

  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'sony',
  //   title: 'Sony Building Signage',
  //   subTitle: 'Cape Town, South Africa',
  //   scope: [Scopes.Design, Scopes.Visualisation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.MentalRay, Software.Photoshop],
  //   image: 'sony'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'winxo',
  //   title: 'Winxo HQ Signage',
  //   subTitle: 'Casablanca, Morocco',
  //   scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'winxo'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 't2Snooze',
  //   title: 'Swissport Snooze Lounge',
  //   subTitle: 'Heathrow Terminal 2',
  //   scope: [Scopes.SpacePlanning, Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 't2Snooze'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'vamiziPlan',
  //   title: 'Vamizi Villa Plan',
  //   subTitle: 'Vamizi Island, Mozambique',
  //   scope: [Scopes.Visualisation],
  //   software: [Software.AutoCAD, Software.Photoshop],
  //   image: 'vamiziPlan'
  // },
  // {
  //   projectType: ProjectType.DESIGN,
  //   slug: 'hermanus',
  //   title: 'Hermanus Market Stalls',
  //   subTitle: 'Hermanus, South Africa',
  //   scope: [Scopes.Design, Scopes.Visualisation, Scopes.TechnicalDocumentation],
  //   software: [Software.AutoCAD, Software.ThreeDSMax, Software.VRay, Software.Photoshop],
  //   image: 'hermanus'
  // }
]
