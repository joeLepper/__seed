// describe('Testing sampleOne directive', function() {
//   var scope,
//       elem,
//       directive,
//       compiled,
//       html;

//   beforeEach(function (){
//     //load the module
//     module('RPMDirectives');

//     //set our view html.
//     html = '<div></div>';

//     inject(function($compile, $rootScope) {
//       //create a scope (you could just use $rootScope, I suppose)
//       scope = $rootScope.$new();

//       //get the jqLite or jQuery element
//       elem = angular.element(
//         '<div>' +
//           '<a>' +
//           '<tooltip icon="true" position="bottom-center-left">' +
//             'bar' +
//           '</tooltip>' +
//         '</div>'
//       );

//       //compile the element into a function to
//       // process the view.
//       compiled = $compile(elem);

//       //run the compiled view.
//       compiled(scope);

//       //call digest on the scope!
//       scope.$digest();
//     });
//   });

//   it('Should set the text of the element to whatever was passed.', function() {
//     //test to see if it was updated.
//     expect(elem.find('a')).toBe('bar');
//   });
// });