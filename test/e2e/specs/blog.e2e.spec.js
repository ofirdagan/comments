'use strict';
var blog = require('../drivers/blog');
var page = require('../pages/blog.page');

describe('A blog page', function () {

  beforeEach(function () {
    blog.clearComments();
  });

  it('should add / read a comment', function () {
    page.navigate();
    page.postComment('hi wix', 'ofird@wix.com');

    expect(page.getCommentsCount()).toBe(1);
    expect(page.getCommentsAt(0).text).toMatch('hi wix');
    expect(page.getCommentsAt(0).email).toMatch('ofird@wix.com');
  });

  it('should persist comments', function () {
    page.navigate();
    page.postComment('hi wix');

    page.navigate();
    expect(page.getCommentsCount()).toBe(1);
  });

  it('should enhance a comment with a profile picture', function () {
    blog.setImageForEmail('ofird@wix.com', 'http://myprofile-pic.com/mypic.png');
    page.navigate();
    page.postComment('this blog is awesome', 'ofird@wix.com');

    expect(page.getCommentsAt(0).profileImage).toBe('http://myprofile-pic.com/mypic.png');
  });
});
