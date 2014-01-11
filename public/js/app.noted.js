angular.module('seedApp', [
  'seedCtrls',
  'ngRoute',
  'templates'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'WelcomeController',
      templateUrl: 'templates/welcome.html'
    }).otherwise({ redirectTo: '/' });
  }
]);
angular.module('seedCtrls', []).controller('WelcomeController', [
  '$scope',
  function WelcomeController($scope) {
    console.log('Hello Controllers!');
    $scope.welcome = 'Hello Tests!';
  }
]);
(function (module) {
  try {
    module = angular.module('templates');
  } catch (e) {
    module = angular.module('templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('templates/welcome.html', '\n' + '<h1>Hello World!!!!</h1>');
    }
  ]);
}());