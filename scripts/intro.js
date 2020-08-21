window.addEventListener('DOMContentLoaded', () => {

  const oCircle = document.querySelector('#circleWhite')
  const helloText = document.querySelector('#hello')
  const helloTouchText = document.querySelector('#helloTouch')


  oCircle.addEventListener('mouseover', () => {
    helloText.innerHTML='hello'
    helloTouchText.innerHTML=''
  })

  oCircle.addEventListener('mouseout', () => {
    helloText.innerHTML=''
  })


})
