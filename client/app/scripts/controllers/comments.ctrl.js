'use strict';

(function () {

  function CommentsCtrl(commentsApi) {
    var self = this;
    this.comments = [];

    commentsApi.getComments().then(function (comments) {
      angular.copy(comments, self.comments);
    });

    this.addComment = function () {
      var comment = {text: self.commentText, email: self.inputEmail};
      commentsApi.addComment(comment).then(function (comment) {
        self.comments.unshift(comment);
      });
    };
  }

  angular.module('commentsApp').controller('CommentsCtrl', CommentsCtrl);
})();
