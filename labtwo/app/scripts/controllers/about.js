'use strict';

/**
 * @ngdoc function
 * @name labtwoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the labtwoApp
 */
angular.module('labtwoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
