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
      controller: 'NotesIndexController',
      controllerAs: 'notesCtrl'
    })
    .when('/notes/:id', {
      templateUrl: 'templates/pages/notes/show.html',
      controller: 'NotesShowController',
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html',
      controller: 'NotesCreateController',
      controllerAs: 'newNotesCtrl'
    })
    .otherwise({ redirectTo: '/notes' });
}]);
