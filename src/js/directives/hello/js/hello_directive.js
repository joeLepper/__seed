angular.module('HelloDirective', [])
  .directive('hello', function(){
    return {
      templateUrl : 'templates/hello_directive.html',
      controller  : function($scope){
        console.log('Hello Directive!');
        $scope.world = 'World!';
      },
      restrict: 'E'
    };
  });