'use strict';
var blog = require('../drivers/blog');
var page = require('../pages/blog.page');

describe('A blog page', function () {

  beforeEach(function () {
    blog.clearComments();
  });

  it('should add / read a comment', function () {
    page.navigate();
    page.postComment('hi wix');

    expect(page.getCommentsCount()).toBe(1);
    expect(page.getCommentsAt(0).text).toMatch('hi wix');
  });

  it('should persist comments', function () {
    page.navigate();
    page.postComment('hi wix');

    page.navigate();
    expect(page.getCommentsCount()).toBe(1);
  });

});
