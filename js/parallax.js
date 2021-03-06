$(window).scroll(function() {

  if ($(window).width() >= 1026) {

    // find the scroll and use this variable to move elements

    var winScroll = $(this).scrollTop();
    // console.log(winScroll);

    // left side moves out of view on the x-axis on scroll

    $('.home-earbuds').css({
      'transform': 'rotate(.625turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-earbuds-shadow').css({
      'transform': 'rotate(.625turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-bamboo').css({
      'transform': 'rotate(.625turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-bamboo-shadow').css({
      'transform': 'rotate(.625turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    // right side moves out of view on the x-axis on scroll

    $('.home-ballpoint').css({
      'transform': 'rotate(.91turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-ballpoint-shadow').css({
      'transform': 'rotate(.91turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-felt-pen').css({
      'transform': 'rotate(.655turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-felt-pen-shadow').css({
      'transform': 'rotate(.655turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-sharpie').css({
      'transform': 'rotate(.9turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-sharpie-shadow').css({
      'transform': 'rotate(.9turn) translate('+ winScroll /13 +'%, -'+ winScroll /10 +'%)'
    });

    $('.home-mouse').css({
      'transform': 'rotate(.9turn) translate('+ winScroll /7 +'%, '+ winScroll /10 +'%)'
    });

    $('.home-mouse-shadow').css({
      'transform': 'rotate(.9turn) translate('+ winScroll /7 +'%, '+ winScroll /10 +'%)'
    });

    // center moves down on the y-axis on scroll

    $('.logo').css({
      'transform': 'translate(0px, '+ winScroll /10 +'%)'
    });

    $('.header-nav-links').css({
      'transform': 'translate(0px, '+ winScroll *.3 +'px)'
    });

    $('.nav-anchor').css({
      'transform': 'translate(0px, '+ winScroll *.3 +'px)'
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

    // HEADER NAVBAR STARS //

    $('#header-star-left').css({
      'transform': 'translate(-'+ winScroll *.4 +'px, '+ winScroll *.8 +'px)'
    });

    $('#header-star-center').css({
      'transform': 'translate(0px, '+ winScroll *.8 +'px)'
    });

    $('#header-star-right').css({
      'transform': 'translate('+ winScroll *.4 +'px, '+ winScroll *.8 +'px)'
    });

  }

  // Turns off animations for thumbnails when smart phone size to speed up loading all the images.

  if ($(window).width() <= 736) {

    $('.skills-icon-name').css({
      '-ms-animation-name': 'blank',
      '-webkit-animation-name': 'blank',
      '-moz-animation-name': 'blank',
      '-o-animation-name': 'blank',
      'animation-name': 'blank'
    });

    $('.developer-thumbnail').css({
      '-ms-animation-name': 'blank',
      '-webkit-animation-name': 'blank',
      '-moz-animation-name': 'blank',
      '-o-animation-name': 'blank',
      'animation-name': 'blank'
    });

    $('.developer-thumbnail-gif').css({
      '-ms-animation-name': 'blank',
      '-webkit-animation-name': 'blank',
      '-moz-animation-name': 'blank',
      '-o-animation-name': 'blank',
      'animation-name': 'blank'
    });

    $('.additional-thumbnail-container').css({
      '-ms-animation-name': 'blank',
      '-webkit-animation-name': 'blank',
      '-moz-animation-name': 'blank',
      '-o-animation-name': 'blank',
      'animation-name': 'blank'
    });

    $('.portfolio-cover').css({
      '-ms-animation-name': 'blank',
      '-webkit-animation-name': 'blank',
      '-moz-animation-name': 'blank',
      '-o-animation-name': 'blank',
      'animation-name': 'blank'
    });

    $('.portfolio-thumbnail-container').css({
      '-ms-animation-name': 'blank',
      '-webkit-animation-name': 'blank',
      '-moz-animation-name': 'blank',
      '-o-animation-name': 'blank',
      'animation-name': 'blank'
    });

  }

});
