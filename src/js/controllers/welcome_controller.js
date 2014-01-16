angular.module('WelcomeCtrls', [])
  .controller('welcomeCtrl', function WelcomeController($scope) {
    console.log('Hello Controllers!');
    $scope.welcome = 'Hello Tests!';
  });