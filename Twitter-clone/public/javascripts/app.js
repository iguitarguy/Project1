(function() {
  "use strict";
  
  var app = angular.module("twitter-clone", [
    "twitter-clone.controllers.main",
    "twitter-clone.controllers.post",
    "twitter-clone.controllers.auth",
    "twitter-clone.controllers.nav",
    "twitter-clone.services.post",
    "twitter-clone.services.auth",
    "ui.router"
  ]);

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state("root", {
        abstract: true,
        views: {
          "header": {
            templateUrl: "partials/header",
            controller: "NavController"
          }
        }
      });

      $urlRouterProvider.otherwise("home");
    }
  ]);
})();
