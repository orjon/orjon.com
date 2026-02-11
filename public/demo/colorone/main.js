$(() => {
  const animationSpeed = 2400

  $('.colorFade > div:gt(0)').hide()
  $('.timeOverlay > div:gt(0)').hide()

  $('.toggle').click(() => {
    $('.timeOverlay').toggleClass('hidden')
  })

  colorFade = () => {
    $('.colorFade > div:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn()
      .end()
      .appendTo('.colorFade')
  }

  timeOverlay = () => {
    $('.timeOverlay > div:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn(animationSpeed)
      .end()
      .appendTo('.timeOverlay')
  }

  setInterval(colorFade, animationSpeed)
  setInterval(timeOverlay, animationSpeed)
})
