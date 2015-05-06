/**
 * Created by Ofir_Dagan on 4/30/15.
 */


function Comments() {
  var comments = [];

  this.get = function () {
    return comments;
  };

  var config = require('../config/environment');
  var fullContactApi = config.fullContact;
  var q = require('q');

  this.add = function (comment) {
    var defer = q.defer();
    fullContactApi.person.findByEmail(comment.email, function (err, info) {
      comment.profileImage = info && info.photos && info.photos.length > 0 ? info.photos[0].url : undefined;
      comments.unshift(comment);
      defer.resolve(comment);
    });
    return defer.promise;
  };

  this.clear = function () {
    comments = [];
  };
}
module.exports = new Comments();
