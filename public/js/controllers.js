houseChooser.controller('WelcomeController', function WelcomeController($scope, $location) {
  $scope.criteria = []

  $scope.submit = function(){
    category = { criterion : $('#criterion').val()
               , type      : $('#type').val() };
               
    $scope.criteria.push(category);
  };

  $scope.types = ['check','rating'];
});

houseChooser.controller('NavbarController', function NavbarController($scope, $location) {
  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
  };
});