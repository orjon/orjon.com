window.addEventListener('DOMContentLoaded', () => {

  window.onload = function (){
    checkDisplay()
  }

  window.onresize = function(){
    checkDisplay()
  }

  function checkDisplay(){
    let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (windowWidth < windowHeight){
      // Portrait
      console.log('Screen orientation: Portrait')
      document.documentElement.style.setProperty('--oSize', '70vw')
      document.documentElement.style.setProperty('--fontSizeHello', '4vw')
      $('.landscape').addClass('hidden')
      $('.portrait').removeClass('hidden')
    } else {
      // Landscape
      console.log('Screen orientation: Landscape')
      document.documentElement.style.setProperty('--oSize', '70vh')
      document.documentElement.style.setProperty('--fontSizeHello', '4vh')
      $('.landscape').removeClass('hidden')
      $('.portrait').addClass('hidden')
    }
  }

})
