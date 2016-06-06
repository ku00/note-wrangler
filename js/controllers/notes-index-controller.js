angular.module('NoteWrangler')
.controller('NotesIndexController', function($http) {
  var controller = this;

  $http.get('/notes').success(function(data){
    controller.notes = data;
  });
});
