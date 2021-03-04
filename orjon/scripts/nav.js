/* eslint-disable no-unused-vars */
$(() => {
  const currentPage = document.querySelector('.navText').innerHTML;
  const navIcons = document.querySelectorAll('.navIcon');
  const navText = document.querySelector('.navText');

  navIcons.forEach((icon) => {
    icon.addEventListener('mouseover', (e) => {
      if ($(e.target).hasClass('code')) {
        $('.navText').css('text-align', 'left');
        navText.innerHTML = 'code';
        $(e.target).attr('src', '../orjon/images/nav/navCodeON.png');
      } else if ($(e.target).hasClass('design')) {
        $('.navText').css('text-align', 'left');
        navText.innerHTML = 'design & visualisation';
        $(e.target).attr('src', '../orjon/images/nav/navDesignON.png');
      } else if ($(e.target).hasClass('electronics')) {
        $('.navText').css('text-align', 'left');
        navText.innerHTML = 'electronics';
        $(e.target).attr('src', '../orjon/images/nav/navElectronicsON.png');
      } else if ($(e.target).hasClass('face')) {
        $('.navText').css('text-align', 'right');
        navText.innerHTML = 'me';
        $(e.target).attr('src', '../orjon/images/nav/navFaceON.png');
      }
    });

    icon.addEventListener('mouseout', () => {
      navText.innerHTML = currentPage;
      resetNavIcons();
      $('.code.current').attr('src', '../orjon/images/nav/navCodeON.png');
      $('.design.current').attr('src', '../orjon/images/nav/navDesignON.png');
      $('.electronics.current').attr(
        'src',
        '../orjon/images/nav/navElectronicsON.png'
      );
      $('.face.current').attr('src', '../orjon/images/nav/navFaceON.png');
      $('.navText.me').css('text-align', 'right');
    });
  });

  function resetNavIcons() {
    $('.navText').css('text-align', 'left');
    $('.code').attr('src', '../orjon/images/nav/navCodeOFF.png');
    $('.design').attr('src', '../orjon/images/nav/navDesignOFF.png');
    $('.electronics').attr('src', '../orjon/images/nav/navElectronicsOFF.png');
    $('.face').attr('src', '../orjon/images/nav/navFaceOFF.png');
  }
});
