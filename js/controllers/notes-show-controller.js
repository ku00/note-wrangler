angular.module('NoteWrangler')
.controller('NotesShowController', function($http, $routeParams) {
  var controller = this;

  $http.get('/notes/:id', {params: {id: $routeParams.id}}).success(function(data){
    controller.note = data;
  });
});
