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
        $('.next-mac').on('click', function(){
          var currentImg = $('.active-mac');
          var nextImg = currentImg.next();

          if(nextImg.length){
            currentImg.removeClass('active-mac').css('z-index', -10);
            nextImg.addClass('active-mac').css('z-index', 10);
          }
        });

        $('.prev-mac').on('click', function(){
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
        $('.next-paul').on('click', function(){
          var currentImg = $('.active-paul');
          var nextImg = currentImg.next();

          if(nextImg.length){
            currentImg.removeClass('active-paul').css('z-index', -10);
            nextImg.addClass('active-paul').css('z-index', 10);
          }
        });

        $('.prev-paul').on('click', function(){
          var currentImg = $('.active-paul');
          var prevImg = currentImg.prev();

          if(prevImg.length){
            currentImg.removeClass('active-paul').css('z-index', -10);
            prevImg.addClass('active-paul').css('z-index', 10);
          }
        });
      });

      // vv JQUERY DESIGN PORTFOLIO IMAGE SLIDER vv //

      $(function() {
        $('.next-design-port').on('click', function(){
          var currentImg = $('.active-design-port');
          var nextImg = currentImg.next();

          if(nextImg.length){
            currentImg.removeClass('active-design-port').css('z-index', -10);
            nextImg.addClass('active-design-port').css('z-index', 10);
          }
        });

        $('.prev-design-port').on('click', function(){
          var currentImg = $('.active-design-port');
          var prevImg = currentImg.prev();

          if(prevImg.length){
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
