'use strict';

(function () {

  function CommentsCtrl($http) {
    var self = this;
    this.comments = [];

    $http.get('/api/comments').then(function (response) {
      angular.copy(response.data, self.comments);
    });

    this.addComment = function () {
      var comment = {text: self.commentText};
      $http.post('/api/comments/', comment);
      self.comments.unshift(comment);
    };
  }

  angular.module('commentsApp').controller('CommentsCtrl', CommentsCtrl);
})();
