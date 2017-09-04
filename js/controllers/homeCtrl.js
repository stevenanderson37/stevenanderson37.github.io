angular.module('portfolioApp')
.controller('homeCtrl', function($scope, $stateParams, portfolioSrv) {
  $scope.stateName = 'Home';

  $(document).ready(function() {
    $(document).ready(function() {
      $(function() {
        // Select link by id and add click event
        $('#about-link').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#about-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#developer-link').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#developer-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#designer-link').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#designer-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#contact-link').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });

      $(function() {
        // Select link by id and add click event
        $('#anchor1').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#about-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#anchor2').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#developer-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#anchor3').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#designer-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#anchor4').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#anchor5').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#header-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });

      // FOR SMART PHONES //

      $(function() {
        // Select link by id and add click event
        $('#about-link-smartphones').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#about-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#developer-link-smartphones').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#developer-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#designer-link-smartphones').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#designer-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#contact-link-smartphones').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });

      // vv JQUERY MAC CLONE IMAGE SLIDER vv //
      $(function() {
        var currentImg = $('.active-mac');
        var nextImg = currentImg.next();
        var imgSrc = document.getElementById('current-mac').src;

        if (currentImg.length && /gif/.test(imgSrc)) {
          currentImg.addClass('box-shadow-gif').css('box-shadow', '0px 0px 10px rgba(0,0,0,.3)');
          currentImg.addClass('box-shadow-gif').css('margin', 15+'px');
          currentImg.removeAttr('id');
          nextImg.attr('id', 'current-mac');
          imgSrc = document.getElementById('current-mac').src;
        } else {
          currentImg.removeClass('box-shadow-gif');
          currentImg.removeAttr('id');
          nextImg.attr('id', 'current-mac');
          imgSrc = "";
        }
      });

      $(function() {
        var currentImg = $('.active-paul');
        var nextImg = currentImg.next();
        var imgSrc = document.getElementById('current-paul').src;

        if (currentImg.length && /gif/.test(imgSrc)) {
          currentImg.addClass('box-shadow-gif').css('box-shadow', '0px 0px 10px rgba(0,0,0,.3)');
          currentImg.addClass('box-shadow-gif').css('margin', 15+'px');
          currentImg.removeAttr('id');
          nextImg.attr('id', 'current-paul');
          imgSrc = document.getElementById('current-paul').src;
        } else {
          currentImg.removeClass('box-shadow-gif');
          currentImg.removeAttr('id');
          nextImg.attr('id', 'current-paul');
          imgSrc = "";
        }
      });

      $(function() {
        var currentImg = $('.active-design-port');
        var nextImg = currentImg.next();
        var imgSrc = document.getElementById('current-design-port').src;

        if (currentImg.length && /gif|png|jpg|jpeg/.test(imgSrc)) {
          currentImg.addClass('box-shadow-gif').css('box-shadow', '0px 0px 10px rgba(0,0,0,.3)');
          currentImg.addClass('box-shadow-gif').css('margin', 15+'px');
          currentImg.removeAttr('id');
          nextImg.attr('id', 'current-design-port');
          imgSrc = document.getElementById('current-design-port').src;
        } else {
          currentImg.removeClass('box-shadow-gif');
          currentImg.removeAttr('id');
          nextImg.attr('id', 'current-design-port');
          imgSrc = "";
        }
      });

      $(function() {
        $('.next-mac').on('click', function(){
          var currentImg = $('.active-mac');
          var nextImg = currentImg.next();
          var imgSrc = document.getElementById('current-mac').src;

          if(nextImg.length) {
            currentImg.removeClass('active-mac').css('z-index', -10);
            nextImg.addClass('active-mac').css('z-index', 10);
          }

          if (nextImg.length && /gif/.test(imgSrc)) {
            nextImg.addClass('box-shadow-gif').css('box-shadow', '0px 0px 10px rgba(0,0,0,.3)');
            nextImg.addClass('box-shadow-gif').css('margin', 15+'px');
            currentImg.removeAttr('id');
            nextImg.attr('id', 'current-mac');
          } else if (nextImg.length && /png|jpg|jpeg/.test(imgSrc)) {
            currentImg.addClass('box-shadow-gif').css('margin', 0+'px');
            currentImg.addClass('box-shadow-gif').css('box-shadow', 'none');
            currentImg.removeAttr('id');
            nextImg.attr('id', 'current-mac');
          }
        });

        $('.prev-mac').on('click', function() {
          var currentImg = $('.active-mac');
          var prevImg = currentImg.prev();

          if(prevImg.length){
            currentImg.removeClass('active-mac').css('z-index', -10);
            prevImg.addClass('active-mac').css('z-index', 10);
          }
        });
      });

      // vv JQUERY PAUL VALENTINE IMAGE SLIDER vv //

      $(function() {
        $('.next-paul').on('click', function() {
          var currentImg = $('.active-paul');
          var nextImg = currentImg.next();
          var imgSrc = document.getElementById('current-mac').src;

          if(nextImg.length) {
            currentImg.removeClass('active-paul').css('z-index', -10);
            nextImg.addClass('active-paul').css('z-index', 10);
          }

          if (nextImg.length && /gif/.test(imgSrc)) {
            nextImg.addClass('box-shadow-gif').css('box-shadow', '0px 0px 10px rgba(0,0,0,.3)');
            nextImg.addClass('box-shadow-gif').css('margin', 15+'px');
            currentImg.removeAttr('id');
            nextImg.attr('id', 'current-mac');
          } else if (nextImg.length && /png|jpg|jpeg/.test(imgSrc)) {
            currentImg.addClass('box-shadow-gif').css('margin', 0+'px');
            currentImg.addClass('box-shadow-gif').css('box-shadow', 'none');
            currentImg.removeAttr('id');
            nextImg.attr('id', 'current-mac');
          }
        });

        $('.prev-paul').on('click', function() {
          var currentImg = $('.active-paul');
          var prevImg = currentImg.prev();

          if(prevImg.length) {
            currentImg.removeClass('active-paul').css('z-index', -10);
            prevImg.addClass('active-paul').css('z-index', 10);
          }
        });
      });

      // vv JQUERY DESIGN PORTFOLIO IMAGE SLIDER vv //

      $(function() {
        $('.next-design-port').on('click', function() {
          var currentImg = $('.active-design-port');
          var nextImg = currentImg.next();
          var imgSrc = document.getElementById('current-mac').src;

          if(nextImg.length) {
            currentImg.removeClass('active-design-port').css('z-index', -10);
            nextImg.addClass('active-design-port').css('z-index', 10);
          }

          if (nextImg.length && /gif/.test(imgSrc)) {
            nextImg.addClass('box-shadow-gif').css('box-shadow', '0px 0px 10px rgba(0,0,0,.3)');
            nextImg.addClass('box-shadow-gif').css('margin', 15+'px');
            currentImg.removeAttr('id');
            nextImg.attr('id', 'current-mac');
          } else if (nextImg.length && /png|jpg|jpeg/.test(imgSrc)) {
            currentImg.addClass('box-shadow-gif').css('margin', 0+'px');
            currentImg.addClass('box-shadow-gif').css('box-shadow', 'none');
            currentImg.removeAttr('id');
            nextImg.attr('id', 'current-mac');
          }
        });

        $('.prev-design-port').on('click', function() {
          var currentImg = $('.active-design-port');
          var prevImg = currentImg.prev();

          if(prevImg.length) {
            currentImg.removeClass('active-design-port').css('z-index', -10);
            prevImg.addClass('active-design-port').css('z-index', 10);
          }
        });
      });

      // vv STICKY NAVBAR vv //

      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-about-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#about-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-developer-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#developer-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-designer-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#designer-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-contact-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
    });
  });

})
