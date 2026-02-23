$(() => {
  const theTime = { hrs: 0, mins: 0, sec: 0 }

  let maxVariance = 6
  let variance = 0
  let frequency = 5000
  let intRandom

  const $secondBlinker = $('.secondBlinker')

  function onload() {
    updateClock()
    intSeconds = setInterval(secondsToggle, 500)
    startClockInterval()
    fadeIn()
  }

  function updateTime() {
    const time = new Date()
    theTime.hrs = time.getHours()
    theTime.mins = time.getMinutes()
    theTime.sec = time.getSeconds()
  }

  function updateClock() {
    updateTime()
    variance = Math.floor(Math.random() * (maxVariance * 2 + 1)) - maxVariance

    let hours = theTime.hrs
    let minutes = theTime.mins + variance

    if (minutes > 59) {
      minutes = minutes - 60
      hours = hours + 1
    } else if (minutes < 0) {
      minutes = minutes + 60
      hours = hours - 1
    }

    if (hours > 23) {
      hours = hours - 24
    } else if (hours < 0) {
      hours = hours + 24
    }
    const hoursx10 = Math.floor(hours / 10)
    const hoursx01 = hours % 10
    const minutesx10 = Math.floor(minutes / 10)
    const minutesx01 = minutes % 10

    // console.log(
    //   `${theTime.hrs}:${theTime.mins.toString().padStart(2, '0')} | var: ${variance}`
    // )

    $('#D1').attr('src', `./images/D1-${hoursx10}.png`)
    $('#D2').attr('src', `./images/D2-${hoursx01}.png`)
    $('#D3').attr('src', `./images/D3-${minutesx10}.png`)
    $('#D4').attr('src', `./images/D4-${minutesx01}.png`)
  }

  function secondsToggle() {
    $secondBlinker.toggle()
  }

  $('#varianceKnob').jsRapKnob({
    position: 0.6,
    onChange: function (value) {
      value = Math.floor(value * 10)
      $('.rapKnobCaption', this).text(`±0…${value}min`)
    },

    onMouseUp: function (value) {
      maxVariance = Math.floor(value * 10)
      restartClock()
      updateClock()
      startClockInterval()
    }
  })

  $('#frequencyKnob').jsRapKnob({
    position: 4 / 29, // ≈ 0.138, which equals 5 seconds,
    onChange: function (value) {
      $('.rapKnobCaption', this).html(`@${(value * 29 + 1).toFixed(1)}sec`)
    },
    onMouseUp: function (value) {
      frequency = Math.floor(value * 29000) + 1000
      restartClock()
      updateClock()
      startClockInterval()
    }
  })

  function startClockInterval() {
    intRandom = setInterval(updateClock, frequency)
  }

  function restartClock() {
    clearInterval(intRandom)
  }

  function fadeIn() {
    $('#abouttime').animate({ opacity: 1 }, 2500)
  }

  onload()
})
