SeedApp.controller('WelcomeController', function WelcomeController($scope, $location) {
});

SeedApp.controller('NavbarController', function NavbarController($scope, $location) {
  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
  };
});