describe('Testing sampleOne directive', function() {
  var scope, controller;

  beforeEach(function (){
    module('WelcomeCtrls');

    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      controller = $controller( 'welcomeCtrl', { $scope : scope } );
    });
  });

  it('Should set the text of the element to whatever was passed.', function() {
    expect(scope.welcome).toBe('Hello Tests!');
  });
});