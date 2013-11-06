'use strict';

var App = angular.module('App', []);

App.directive('hello', function HelloDir() {
  return{
    controller: function($scope, $rootScope){
        $scope.yourName = "your name";
        $scope.clicked = function(){
          $rootScope.$broadcast('alertAll');
        };
        $scope.alertName = function(){
          alert('hello ' + $scope.yourName + ' from element ' + $scope.number);
        };
        $scope.$on('alertAll', function(){
          $scope.alertName();
        });
      },
    template:
        '<input type="text" ng-model="yourName" placeholder="Enter your name here">' +
        '<h1>Hello {{yourName}}! It is nice to see you.</h1>' +
        '<button ng-click="clicked()">Submit</button><br/>',
    restrict: 'E',
    scope: { number: '=' }
  }
});
