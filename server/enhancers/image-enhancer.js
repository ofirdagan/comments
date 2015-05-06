/**
 * Created by Ofir_Dagan on 4/30/15.
 */
var config = require('../config/environment');
var fullContactApi = config.fullContact;
var q = require('q');
function ImageEnhancer() {

  this.enhance = function (email) {
    var defer = q.defer();
    fullContactApi.person.findByEmail(email, function (err, info) {
      var imageUrl = info && info.photos && info.photos.length > 0 ? info.photos[0].url : undefined;
      defer.resolve(imageUrl);
    });
    return defer.promise;
  };
}
module.exports = new ImageEnhancer();
