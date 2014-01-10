angular.module('seedCtrls', [])
  .controller('WelcomeController', function WelcomeController($scope) {
    console.log('Hello Controllers!');
    $scope.welcome = 'Hello Tests!';
  });