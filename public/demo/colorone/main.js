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

  timeOverlay = () => {
    $('.timeOverlay > picture:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn(animationSpeed)
      .end()
      .appendTo('.timeOverlay')
  }

  setInterval(colorFade, animationSpeed)
  setInterval(timeOverlay, animationSpeed)

  function fadeIn() {
    $('.colorOne').animate({ opacity: 1 }, 2500)
  }

  fadeIn()
})
