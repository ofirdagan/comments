'use strict';

(function () {

  function CommentsCtrl() {
    var self = this;
    this.comments = [];

    this.addComment = function () {
      var comment = {text: self.commentText};
      self.comments.unshift(comment);
    };
  }

  angular.module('commentsApp').controller('CommentsCtrl', CommentsCtrl);
})();
