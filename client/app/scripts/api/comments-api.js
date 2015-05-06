/**
 * Created by Ofir_Dagan on 5/6/15.
 */
'use strict';
(function () {

  function CommentsApi($http) {
    this.getComments = function () {
      return $http.get('api/comments').then(function (response) {
        return response.data;
      });
    };

    this.addComment = function (comment) {
      return $http.post('api/comments', comment).then(function (response) {
        return response.data;
      });
    };
  }

  angular.module('commentsApp').factory('commentsApi', function ($http) {
    return new CommentsApi($http);
  });
})();
