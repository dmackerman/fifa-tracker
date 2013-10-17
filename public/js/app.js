(function() {

  'use strict';

  angular.module('fifaTrackerApp', ['ngRoute', 'firebase'])
    .config(function ($routeProvider,  $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', {
          templateUrl: '/partials/main',
          controller: 'MainCtrl',
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}())