/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';
var Comment = require('../fragments/comment');

function BlogPage() {
  this.navigate = function () {
    browser.get('/');
  };

  this.postComment = function (comment) {
    $('.comment-input-text').sendKeys(comment);
    return $('.comment-submit').click();
  };

  this.getCommentsAt = function (index) {
    return new Comment(getComments().get(index));
  };

  this.getCommentsCount = function () {
    return getComments().count();
  };

  function getComments() {
    //TODO: add $
    return $$('.comments .comment');
  }

}

module.exports = new BlogPage();

