'use strict';

var houseChooser = angular.module('houseChooser', [])
.config(function($routeProvider) {
  $routeProvider.
   when('/', {
     controller: 'WelcomeController',
     templateUrl: 'views/welcome.html'
   }).
   otherwise({ redirectTo: '/' });
})


