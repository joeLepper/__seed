'use strict';

var SeedApp = angular.module('seedApp', [])
.config(function($routeProvider) {
  $routeProvider.
   when('/', {
     controller: 'WelcomeController',
     templateUrl: 'views/welcome.html'
   }).
   otherwise({ redirectTo: '/' });
})


