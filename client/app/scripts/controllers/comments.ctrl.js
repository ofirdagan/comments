'use strict';

(function () {

  function CommentsCtrl() {
    var self = this;
    this.comments = [];

    this.addComment = function () {
      var comment = self.commentText;
      self.comments.push(comment);
    };
  }

  angular.module('commentsApp').controller('CommentsCtrl', CommentsCtrl);
})();
