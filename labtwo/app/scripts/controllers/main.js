'use strict';

/**
 * @ngdoc function
 * @name labtwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the labtwoApp
 */
angular.module('labtwoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
