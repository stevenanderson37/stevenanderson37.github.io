$(window).scroll(function() {

  // find the scroll and use this variable to move elements

  var winScroll = $(this).scrollTop();
  console.log(winScroll);

  // left side moves out of view on the x-axis on scroll

  // $('.home-earbuds').css({
  //   'transform': 'translate(-'+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-earbuds-shadow').css({
  //   'transform': 'translate(-'+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-bamboo').css({
  //   'transform': 'translate(-'+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-bamboo-shadow').css({
  //   'transform': 'translate(-'+ winScroll /13 +'%, 0px)'
  // });
  //
  // // right side moves out of view on the x-axis on scroll
  //
  // $('.home-ballpoint').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-ballpoint-shadow').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-felt-pen').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-felt-pen-shadow').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-sharpie').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-sharpie-shadow').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-mouse').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });
  //
  // $('.home-mouse-shadow').css({
  //   'transform': 'translate('+ winScroll /13 +'%, 0px)'
  // });

  // center moves down on the y-axis on scroll

  $('.logo').css({
    'transform': 'translate(0px, '+ winScroll /20 +'%)'
  });

  $('.home-keyboard').css({
    'transform': 'translate(0px, '+ winScroll /5 +'%)'
  });

  $('.home-keyboard-shadow').css({
    'transform': 'translate(0px, '+ winScroll /5 +'%)'
  });

  $('.home-iMac-above').css({
    'transform': 'translate(0px, -'+ winScroll /10 +'%)'
  });

  $('.home-iMac-above-shadow').css({
    'transform': 'translate(0px, -'+ winScroll /10 +'%)'
  });

});
