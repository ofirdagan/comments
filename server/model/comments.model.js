/**
 * Created by Ofir_Dagan on 4/30/15.
 */

function Comments() {
  var comments = [];

  this.get = function () {
    return comments;
  };

  this.add = function (comment) {
    comments.unshift(comment);
  };

  this.clear = function () {
    comments = [];
  };
}
module.exports = new Comments();
