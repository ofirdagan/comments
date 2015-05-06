/**
 * Created by Ofir_Dagan on 4/30/15.
 */

function Comments() {
  var comments = [];

  this.get = function () {
    return comments;
  };

  this.add = function (comment) {
    var imageEnhancer = require('../enhancers/image-enhancer');
    return imageEnhancer.enhance(comment.email).then(function (imageUrl) {
      comment.profileImage = imageUrl;
      comments.unshift(comment);
      return comment
    });
  };

  this.clear = function () {
    comments = [];
  };
}
module.exports = new Comments();
