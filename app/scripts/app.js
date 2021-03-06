'use strict';

/**
 * @ngdoc overview
 * @name nohoApp
 * @description
 * # nohoApp
 *
 * Main module of the application.
 */



var app = angular.module('nohoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-scroll-animate'
  ]);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/cliquickstart', {
      templateUrl: 'views/cliquickstart.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
