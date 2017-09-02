angular.module('portfolioApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/homeView.html",
      controller: "homeCtrl"
    });

})
