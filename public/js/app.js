'use strict';

var App = angular.module('App', []);

App.directive('hello', function HelloDir() {
  return{
    controller: function($scope){
        $scope.yourName = "your name";
        $scope.alertName = function(){
          alert($scope.yourName);
        };
      },
    template:
      '<form id="hello_form" ng-submit="alertName()">' +
        '<input type="text" ng-model="yourName" placeholder="Enter your name here">' +
        '<h1>Hello {{yourName}}! It is nice to see you.</h1>' +
        '<button type="submit" form="hello_form">Submit</button>' +
      '</form>',
    restrict: 'E'
  }
});
