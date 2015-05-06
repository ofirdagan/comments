describe('comments logic', function () {
  var   comments;

  beforeEach(function () {
     comments = require('../../../server/model/comments.model');
  });

  var expect = require('expect');
  var sinon = require('sinon');
  require('sinon-as-promised');
  //TODO: paste from sinon as promised till eof
  var imageEnhancer = require('../../../server/enhancers/image-enhancer');

  afterEach(function () {
    comments.clear([]);
    imageEnhancer.enhance.restore();
  });

  it('should enhance comment', function (done) {
    sinon.stub(imageEnhancer, 'enhance').resolves('image-url');

    comments.add({email: 'ofird@wix.com', text: 'hi'}).then(function (comment) {
      expect(comment.profileImage).toBe('image-url');
      done();
    });
  });
});
