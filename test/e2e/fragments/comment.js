'use strict';

var Comment = function(element) {
  this.text = element.$('.text').getText();
  this.email = element.$('.email').getText();
  this.profileImage = element.$('.profile-image').getAttribute('src');
};

module.exports = Comment;

