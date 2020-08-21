window.addEventListener('DOMContentLoaded', () => {

  const oCircle = document.querySelector('#circleWhite')
  const helloText = document.querySelector('#hello')


  oCircle.addEventListener('mouseover', () => {
    helloText.innerHTML='hello'
  })

  oCircle.addEventListener('mouseout', () => {
    helloText.innerHTML=''
  })


})
