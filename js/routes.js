angular.module('NoteWrangler')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function($http){
        var controller = this;

        $http.get('/notes').success(function(data){
          controller.notes = notes;
        });
      }
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html'
    })
    .otherwise({ redirectTo: '/notes' });
}]);
