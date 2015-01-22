'use strict';

/**
 * @ngdoc function
 * @name labtwoApp.controller:CustomCtrl
 * @description
 * # CustomCtrl
 * Controller of the labtwoApp
 */
angular.module('labtwoApp')
  .controller('CustomCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
