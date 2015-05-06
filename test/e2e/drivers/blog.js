/**
 * Created by Ofir_Dagan on 5/3/15.
 */
'use strict';
var server = require('./server-config');

function Blog() {
  this.clearComments = function () {
    server.post('/api/bo/comments/clear');
  };
  this.setImageForEmail = function (email, imageUrl) {
    server.post('/api/bo/comments/set-image-for-email', {email: email, imageUrl: imageUrl});
  };
}

module.exports = new Blog();
