window.addEventListener('DOMContentLoaded', () => {

  const arrows = document.querySelectorAll('.navArrow')

  const designImageLabel = document.querySelector('.descriptionText')
  const designImageTech = document.querySelector('.descriptionTech')

  const autoIncrementSpeed = 5000

  let imageNo = 0
  let autoForward = true
  let designImagePlayer = setInterval(autoIncrementImage, autoIncrementSpeed)

  if (!autoForward) {
    clearInterval(designImagePlayer)
  }

  const designImages = [
    'http://www.orjon.com/images/design/cisco2015.jpg',
    'http://www.orjon.com/images/design/nouTable.jpg',
    'http://www.orjon.com/images/design/foreshore.jpg',
    'http://www.orjon.com/images/design/statoil.jpg',
    'http://www.orjon.com/images/design/emidlands.jpg',
    'http://www.orjon.com/images/design/honestlyGood.jpg',
    'http://www.orjon.com/images/design/cisco2016.jpg',
    'http://www.orjon.com/images/design/cisco2017.jpg',
    'http://www.orjon.com/images/design/chix.jpg',
    'http://www.orjon.com/images/design/chess.jpg',
    'http://www.orjon.com/images/design/bhunga.jpg',
    'http://www.orjon.com/images/design/fairmont.jpg',
    'http://www.orjon.com/images/design/ho1.jpg',
    'http://www.orjon.com/images/design/infiniti.jpg',
    'http://www.orjon.com/images/design/operaHouse.jpg',
    'http://www.orjon.com/images/design/knife.jpg',
    'http://www.orjon.com/images/design/knifePlan.jpg',
    'http://www.orjon.com/images/design/laptopStand.jpg',
    'http://www.orjon.com/images/design/office01.jpg',
    'http://www.orjon.com/images/design/oman.jpg',
    'http://www.orjon.com/images/design/ortBridge.jpg',
    'http://www.orjon.com/images/design/redBull.jpg',
    'http://www.orjon.com/images/design/samsung.jpg',
    'http://www.orjon.com/images/design/powerBuoy.jpg',
    'http://www.orjon.com/images/design/sony.jpg',
    'http://www.orjon.com/images/design/winxo.jpg',
    'http://www.orjon.com/images/design/t2Snooze.jpg',
    'http://www.orjon.com/images/design/vamiziPlan.jpg',
    'http://www.orjon.com/images/design/kite.jpg',
    'http://www.orjon.com/images/design/hermanus.jpg'
  ]
  const designLabels = [
    'Internet of Everything, CiscoLive! 2015 : Milan',
    'Angle Desk',
    'Foreshore Pedestrian Bridge : Cape Town, South Africa',
    'Statoil : Trondheim, Norway',
    'Aspire Lounge : East Midlands Airport',
    'Honestly Good : London, UK',
    'Cisco Campus, CiscoLive! 2016 : Berlin',
    'Cisco Campus, CiscoLive! 2017 : Berlin',
    'Chix : Potchefstroom, South Africa',
    'XLT Chess Set',
    'Bhunga Pedestrian Bridge : Cape Town, South Africa',
    'Fairmont Apartments : Durban, South Africa',
    'Copper & Cement : Task Light',
    'Infiniti : London, UK',
    'Opera House : Manama, Bahrain',
    'Knife: Cape Town, South Africa',
    'Knife: Cape Town, South Africa',
    'Lapstånd: A4 flatpack laptop stand',
    'Office.01 : Reticulated Office Furniture',
    'Al Madina A Zarqa : Oman',
    'O.R.Tambo Airport Pedestrian Bridge : Johannesburg, South Africa',
    'Red Bull : Cape Town, South Africa',
    'Samsung Galaxy Launch : Berlin, Germany',
    'Power Buoy : Floating power generator',
    'Sony Building Signage : Cape Town, South Africa',
    'Winxo HQ Signage : Casablanca, Morocco',
    'Swissport Snooze Lounge : Heathrow Terminal 2',
    'Vamizi Villa Plan : Vamizi Island, Mozambique',
    'Kite Buddy : Motorized kite launching handles',
    'Hermanus Market Stall : Hermanus, South Africa'
  ]

  const designTechs = [
    'Layout, Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation, Technical Documentation : 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation, Technical Documentation : AutoCAD, SketchUp, 3ds Max, Mental Ray, Photoshop',
    'Layout, Design, Visualisation : 3ds Max, V-Ray, Photoshop',
    'Layout, Design, Visualisation, Technical Documentation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Visualisation : 3ds Max, V-Ray, Photoshop',
    'Layout, Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Layout, Design, Visualisation, Technical Documentation, On-Site: AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, Mental Ray, Photoshop',
    'Design, Visualisation, Animation, Technical Documentation, 3D Print : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation, Animation, Technical Documentation : AutoCAD, 3ds Max, Mental Ray, Photoshop',
    'Visualisation : 3ds Max, Mental Ray, Photoshop',
    'Design, Visualisation : 3ds Max, V-Ray, Photoshop',
    'Design & Visualisation : 3ds Max, V-Ray, Photoshop',
    'Visualisation: 3ds Max, Mental Ray, Photoshop',
    'Layout, Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, Mental Ray, Photoshop',
    'Layout, Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, Mental Ray, Photoshop',
    'Design, Visualisation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation, Technical Documentation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Visualisation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation : AutoCAD, 3ds Max, Mental Ray, Photoshop',
    'Layout, Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, Mental Ray, Photoshop',
    'Visualisation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation, Technical Documentation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation : AutoCAD, 3ds Max, Mental Ray, Photoshop',
    'Design, Visualisation, Technical Documentation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Layout, Design, Visualisation, Technical Documentation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Visualisation : AutoCAD, Photoshop',
    'Design, Visualisation, Technical Documentation : AutoCAD, 3ds Max, V-Ray, Photoshop',
    'Design, Visualisation, Technical Documentation : AutoCAD, 3ds Max, V-Ray, Photoshop'
  ]


  arrows.forEach(arrow => {
    arrow.addEventListener('mousedown', (e) => {
      clearInterval(designImagePlayer)
      if (autoForward) {
        designImagePlayer = setInterval(autoIncrementImage, autoIncrementSpeed)
      }
      if ($(e.target).hasClass('right')) {
        incrementDesignImage()
      } else if ($(e.target).hasClass('left')) {
        decrementDesignImage()
      }
    })
  })


  $('#designImage').mousedown(function() {
    clearInterval(designImagePlayer)
    if (autoForward) {
      designImagePlayer = setInterval(autoIncrementImage, autoIncrementSpeed)
    }
    incrementDesignImage()
  })

  function autoIncrementImage() {
    $('#designImage').fadeTo('slow', 0, function() {
      imageNo++
      if (imageNo >= (designImages.length)) {
        imageNo= 0
      }
      designImageLabel.innerHTML=designLabels[imageNo]
      designImageTech.innerHTML=designTechs[imageNo]
      $(this).css('background-image', 'url(' + designImages[imageNo] + ')')
    }).fadeTo('slow', 1)
  }

  function incrementDesignImage(){
    $('#designImage').fadeTo('fast', 0, function() {
      imageNo++
      if (imageNo >= (designImages.length)) {
        imageNo= 0
      }
      designImageLabel.innerHTML=designLabels[imageNo]
      designImageTech.innerHTML=designTechs[imageNo]
      $(this).css('background-image', 'url(' + designImages[imageNo] + ')')
    }).fadeTo('fast', 1)
  }

  function decrementDesignImage(){
    $('#designImage').fadeTo('fast', 0, function() {
      imageNo--
      if (imageNo < 0) {
        imageNo= (designImages.length-1)
      }
      designImageLabel.innerHTML=designLabels[imageNo]
      designImageTech.innerHTML=designTechs[imageNo]
      $(this).css('background-image', 'url(' + designImages[imageNo] + ')')
    }).fadeTo('fast', 1)
  }



  $('.autoPlay').mouseover(function() {
    if (autoForward) {
      $(this).attr('src', 'http://www.orjon.com/images/nav/navLoopStop.png')
    } else {
      $(this).attr('src', 'http://www.orjon.com/images/nav/navLoop.png')
    }
  })

  $('.autoPlay').mouseout(function() {
    if (autoForward) {
      $(this).attr('src', 'http://www.orjon.com/images/nav/navLoop.png')
    } else {
      $(this).attr('src', 'http://www.orjon.com/images/nav/navLoopStop.png')
    }
  })

  $('.autoPlay').mousedown(function() {
    autoForward = !autoForward
    console.log(autoForward)
    if (autoForward) {
      incrementDesignImage()
      clearInterval(designImagePlayer)
      designImagePlayer = setInterval(autoIncrementImage, autoIncrementSpeed)
      $(this).attr('src', 'http://www.orjon.com/images/nav/navLoop.png')
    } else {
      clearInterval(designImagePlayer)
      $(this).attr('src', 'http://www.orjon.com/images/nav/navLoopStop.png')
    }
  })

})
