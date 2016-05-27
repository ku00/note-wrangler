angular.module('NoteWrangler', ['ngRoute'])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/notes', {
      templateUrl: '/templates/pages/notes/index.html'
    });
  }]);
