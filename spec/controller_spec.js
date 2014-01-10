describe('Testing sampleOne directive', function() {
  var scope, controller;

  beforeEach(function (){
    module('seedCtrls');

    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      controller = $controller( 'WelcomeController', { $scope : scope } );
    });
  });

  it('Should set the text of the element to whatever was passed.', function() {
    expect(scope.welcome).toBe('Hello Tests!');
  });
});