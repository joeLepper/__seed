angular.module('seedApp', [
  'WelcomeCtrls',
  'HelloCtrls',
  'HelloDirective',
  'ngRoute',
  'templates',
  'HelloFilter'
]).config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      controller: 'welcomeCtrl',
      templateUrl: 'templates/welcome.html'
    }).when('/hello', {
      controller: 'helloCtrl',
      templateUrl: 'templates/hello.html'
    }).otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
  }
]);
angular.module('HelloCtrls', []).controller('helloCtrl', [
  '$scope',
  function HelloCtrl($scope) {
    console.log('Hello Routes!');
  }
]);
angular.module('WelcomeCtrls', []).controller('welcomeCtrl', [
  '$scope',
  function WelcomeController($scope) {
    console.log('Hello Controllers!');
    $scope.welcome = 'Hello Tests!';
  }
]);
angular.module('HelloFilter', []).filter('helloFltr', function () {
});
(function (module) {
  try {
    module = angular.module('templates');
  } catch (e) {
    module = angular.module('templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('templates/hello.html', '\n' + '<hello></hello><a href="/">Route one</a>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('templates');
  } catch (e) {
    module = angular.module('templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('templates/hello_directive.html', '\n' + '<input ng-model="world"/>\n' + '<h2>Hello {{world}}</h2>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('templates');
  } catch (e) {
    module = angular.module('templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('templates/welcome.html', '\n' + '<h1>Hello World!!!!</h1><a ng-href="/hello">Route two</a>');
    }
  ]);
}());
angular.module('HelloDirective', []).directive('hello', function () {
  return {
    templateUrl: 'templates/hello_directive.html',
    controller: [
      '$scope',
      function ($scope) {
        console.log('Hello Directive!');
        $scope.world = 'World!';
      }
    ],
    restrict: 'E'
  };
});