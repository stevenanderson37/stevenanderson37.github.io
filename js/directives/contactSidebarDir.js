angular.module('portfolioApp')
.directive('contactSidebar', function() {

  return {
    restrict: 'AE',
    templateUrl: '../views/contactSidebarTmpl.html',
    controller: function($scope, portfolioSrv) {

      // STICKY NAVBAR WITH JQUERY //
      // var headerContainerHeight = $('.header-container').height();
      $(window).bind('scroll', function () {
        setTimeout(function() {
          //number of pixels before modifying styles
          var num = $('.header-container').outerHeight(true);
          var headerHeight = $('.header-container').outerHeight(true);
          var aboutHeight = $('#about-section').outerHeight(true);
          var developerHeight = $('#developer-section').outerHeight(true);
          var designerHeight = $('#designer-section').outerHeight(true);
          var footerHeight = $('#contact-section').outerHeight(true);
          var documentHeight = $(document).outerHeight(true);
          // console.log(headerHeight);
          // console.log(aboutHeight);
          // console.log(developerHeight);
          // console.log(designerHeight);
          // console.log(footerHeight);
          // console.log(documentHeight);
          if ($(window).scrollTop() >= num - 200 && $(window).scrollTop() <= headerHeight + aboutHeight + developerHeight + designerHeight - 426) {
            $('.contact-icons-sidebar').addClass('fixed-sidebar');
          } else {
            $('.contact-icons-sidebar').removeClass('fixed-sidebar');
          }
        }, 1);
      });

      $scope.openMailer = function () {
        window.location.href = "mailto:happygoatdesigns@gmail.com?subject=&body=";
      };

    }
  }


});
