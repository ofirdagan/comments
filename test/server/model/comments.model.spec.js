describe('comments logic', function () {
  var   comments;

  beforeEach(function () {
     comments = require('../../../server/model/comments.model');
  });

  var expect = require('expect');
  var sinon = require('sinon');
  require('sinon-as-promised');
  var config = require('../../../server/config/environment');
  var fullContactApi = config.fullContact;

  afterEach(function () {
    comments.clear([]);
    fullContactApi.person.findByEmail.restore();
  });

  it('should enhance comment', function (done) {
    sinon.stub(fullContactApi.person, 'findByEmail', function (email, callback) {
      callback('', {photos: [{url: 'http://mypic.com/my-pic.png'}]});
    });
    comments.add({email: 'ofird@wix.com', text: 'hi'}).then(function (comment) {
      expect(comment.profileImage).toBe('http://mypic.com/my-pic.png');
      done();
    });
  });

  it('should return undefined in case did not find picture', function (done) {
    sinon.stub(fullContactApi.person, 'findByEmail', function (email, callback) {
      callback('', {});
    });
    comments.add({email: 'ofird@wix.com', text: 'hi'}).then(function (comment) {
      expect(comment.profileImage).toBe(undefined);
      done();
    });
  });

});
