/**
 * Created by Ofir_Dagan on 5/5/15.
 */
var _ = require('lodash');

function FullContactApiMock () {
  var _email;
  var _imageUrl;

  var baseContact = {
    "status" : 200,
    "photos" : [ {
      "url" : "http://bit.ly/1Ies8rf",
      "isPrimary" : true
    } ]
  };

  this.setImageForEmail = function (email, imageUrl) {
    _email = email;
    _imageUrl = imageUrl;
  };

  this.person = {
    findByEmail: function (email, callback) {
      var contact = baseContact;
      if (email === _email) {
        contact = _.cloneDeep(baseContact);
        contact.photos[0].url = _imageUrl;
      }
      callback('', contact);
    }
  };
}
var mock = new FullContactApiMock();
module.exports = function(apiKey) {
  return mock;
};
