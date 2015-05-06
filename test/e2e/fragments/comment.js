'use strict';

var Comment = function(element) {
  this.text = element.$('.text').getText();
  this.email = element.$('.email').getText();
};

module.exports = Comment;

