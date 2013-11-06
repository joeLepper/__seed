'use strict';

var App = angular.module('App', []);

App.controller('HelloCtrl', function HelloCtrl($scope) {
  $scope.yourName = "your name";
  $scope.alertName = function(){
    alert($scope.yourName);
  };
});