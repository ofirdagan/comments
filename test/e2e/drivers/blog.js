/**
 * Created by Ofir_Dagan on 5/3/15.
 */
'use strict';
var server = require('./server-config');

function Blog() {
  this.clearComments = function () {
    server.post('/api/bo/comments/clear');
  };
}

module.exports = new Blog();
