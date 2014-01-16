angular.module('seedApp', [ 'WelcomeCtrls',
                            'HelloCtrls',
                            'HelloDirective',
                            'ngRoute',
                            'templates',
                            'HelloFilter' ])
.config(function($routeProvider, $locationProvider) {
  $routeProvider.
   when('/', {
     controller  : 'welcomeCtrl',
     templateUrl : 'templates/welcome.html'
   }).
   when('/hello', {
    controller  : 'helloCtrl',
    templateUrl : 'templates/hello.html'
   }).
   otherwise({ redirectTo: '/' });
   $locationProvider
   .html5Mode(true);
});