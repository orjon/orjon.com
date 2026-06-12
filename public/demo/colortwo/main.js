$(() => {
  const animationSpeed = 3600

  $('.colorFade > picture:gt(0)').hide()
  $('.timeOverlay > picture:gt(0)').hide()

  $('.toggle').click(() => {
    $('.timeOverlay').toggleClass('hidden')
  })

  colorFade = () => {
    $('.colorFade > picture:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn()
      .end()
      .appendTo('.colorFade')
  }

  timeFade = () => {
    $('.timeOverlay > picture:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn(animationSpeed)
      .end()
      .appendTo('.timeOverlay')
  }

  setInterval(colorFade, animationSpeed)
  setInterval(timeFade, animationSpeed)

  function fadeIn() {
    $('.colorTwo').animate({ opacity: 1 }, 2500)
  }

  fadeIn()
})
