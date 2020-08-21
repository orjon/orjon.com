window.addEventListener('DOMContentLoaded', () => {

  window.onload = function (){
    checkWindowSize()
    checkOrientation()
  }

  window.onresize = function(){
    checkWindowSize()
    checkOrientation()
  }

  function checkWindowSize(){
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (windowWidth < windowHeight){
      document.documentElement.style.setProperty('--oSize', '70vw')
      document.documentElement.style.setProperty('--fontSizeHello', '4vw')
    } else {
      document.documentElement.style.setProperty('--oSize', '70vh')
      document.documentElement.style.setProperty('--fontSizeHello', '4vh')
    }
  }

  function checkOrientation() {
    if(window.innerHeight > window.innerWidth){
      // console.log('Portrait')
      $('.landscape').addClass('hidden')
      $('.portrait').removeClass('hidden')

    } else {
      // console.log('Landscape')
      $('.landscape').removeClass('hidden')
      $('.portrait').addClass('hidden')

    }
  }

})
