angular.module('portfolioApp')
.directive('stickyNavbar', function() {

  return {
    restrict: 'AE',
    templateUrl: '../views/stickyNavbar.html',
    controller: function($scope, portfolioSrv) {

      // STICKY NAVBAR WITH JQUERY + HIGHLIGHTING THE CURRENT LOCATION //

      var headerHeight = $('.header-container').height();
      var aboutHeight = $('.home-about-me').height();
      var developerHeight = $('.home-developer-portfolio').height();
      var designerHeight = $('.home-design-portfolio').height();

      $(window).bind('scroll', function () {

        // STICKY NAVBAR WITH JQUERY //

        $(function() {
          if ($(window).scrollTop() >= headerHeight) {
            $('.sticky-navbar').removeClass('fixed-navbar');
          } else {
            $('.sticky-navbar').addClass('fixed-navbar');
          }
        });

        // HIGHLIGHTING THE CURRENT LOCATION //

        $(function() {
          if ($(window).scrollTop() >= headerHeight && $(window).scrollTop() <= headerHeight + aboutHeight) {
            $('.opaque-about-link').addClass('highlight-section');
          } else {
            $('.opaque-about-link').removeClass('highlight-section');
          }
        });

        $(function() {
          if ($(window).scrollTop() >= headerHeight + aboutHeight && $(window).scrollTop() <= headerHeight + aboutHeight + developerHeight) {
            $('.opaque-developer-link').addClass('highlight-section');
          } else {
            $('.opaque-developer-link').removeClass('highlight-section');
          }
        });

        $(function() {
          if ($(window).scrollTop() >= headerHeight + aboutHeight + developerHeight && $(window).scrollTop() <= headerHeight + aboutHeight + developerHeight + designerHeight + 500) {
            $('.opaque-designer-link').addClass('highlight-section');
          } else {
            $('.opaque-designer-link').removeClass('highlight-section');
          }
        });

        $(function() {
          if ($(window).scrollTop() >= headerHeight + aboutHeight + developerHeight + designerHeight + 500) {
            $('.opaque-contact-link').addClass('highlight-section');
          } else {
            $('.opaque-contact-link').removeClass('highlight-section');
          }
        });
      });

      // SOFT SCROLL //

      $(document).ready(function() {
        $(document).ready(function() {
          $(function() {
            // Select link by id and add click event
            $('#sticky-about-link').click(function() {

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
            $('#sticky-developer-link').click(function() {

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
            $('#sticky-designer-link').click(function() {

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
            $('#sticky-contact-link').click(function() {

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
            $('#sticky-logo-link').click(function() {

              // Animate Scroll to #bottom
              $('html,body').animate({
                scrollTop: $("#header-section").offset().top }, // Tell it to scroll to the top #bottom
                2000 // How long scroll will take in milliseconds
              );

              // Prevent default behavior of link
              return false;
            });
          });

        });
      });

    }
  }


});