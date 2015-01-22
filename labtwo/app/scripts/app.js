'use strict';

/**
 * @ngdoc overview
 * @name labtwoApp
 * @description
 * # labtwoApp
 *
 * Main module of the application.
 */
angular
  .module('labtwoApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/custom', {
        templateUrl: 'views/custom.html',
        controller: 'CustomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
