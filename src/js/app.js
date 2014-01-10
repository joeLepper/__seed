angular.module('seedApp', [ 'seedCtrls',
                            'ngRoute',
                            'templates' ])
.config(function($routeProvider) {
  $routeProvider.
   when('/', {
     controller: 'WelcomeController',
     templateUrl: 'templates/welcome.html'
   }).
   otherwise({ redirectTo: '/' });
});