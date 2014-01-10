(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/welcome.html',
    '\n' +
    '<h1>Hello World!!!!</h1>');
}]);
})();
