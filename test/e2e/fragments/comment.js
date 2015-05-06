'use strict';

var Comment = function(element) {
  this.text = element.$('.text').getText();
};

module.exports = Comment;

