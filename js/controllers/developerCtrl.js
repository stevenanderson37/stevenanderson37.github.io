angular.module('portfolioApp')
.controller('developerCtrl', function($scope, $stateParams, portfolioSrv) {

  // $(".sticky-position-box").stick_in_parent({
  //   "bottoming": false
  // });

  $("#section1-text").stick_in_parent({
    // "parent": ".intro-text-box",
    "bottoming": false
  });

  $("#section2-text").stick_in_parent({
    // "parent": ".intro-text-box",
    "bottoming": false
  });

  $("#section3-text").stick_in_parent({
    // "parent": ".intro-text-box",
    "bottoming": false
  });


});
