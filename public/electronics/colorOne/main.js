$(() => {
  const animationSpeed = 2400

  $('.colorFade > img:gt(0)').hide()
  $('.timeFade > img:gt(0)').hide()

  $('.toggle').click(() => {
    $('.timeFade').toggleClass('hidden')
  })

  colorFade = () => {
    $('.colorFade > img:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn()
      .end()
      .appendTo('.colorFade')
  }

  timeFade = () => {
    $('.timeFade > img:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn(animationSpeed)
      .end()
      .appendTo('.timeFade')
  }

  setInterval(colorFade, animationSpeed)
  setInterval(timeFade, animationSpeed)
})
