var expect = require('expect');
var sinon = require('sinon');
require('sinon-as-promised');
var config = require('../../../server/config/environment');
var fullContactApi = config.fullContact;

describe('image enhancer', function () {
  var imageEnhancer;

  beforeEach(function () {
    imageEnhancer = require('../../../server/enhancers/image-enhancer');
  });


  afterEach(function () {
    fullContactApi.person.findByEmail.restore();
  });

  it('should return image url for email', function (done) {
    sinon.stub(fullContactApi.person, 'findByEmail', function (email, callback) {
      callback('', {photos: [{url: 'http://mypic.com/my-pic.png'}]});
    });
    imageEnhancer.enhance('ofird@wix.com').then(function (imageUrl) {
      expect(imageUrl).toBe('http://mypic.com/my-pic.png');
      done();
    });
  });

  it('should return undefined in case did not find picture', function (done) {
    sinon.stub(fullContactApi.person, 'findByEmail', function (email, callback) {
      callback('', {});
    });
    imageEnhancer.enhance('ofird@wix.com').then(function (imageUrl) {
      expect(imageUrl).toBe(undefined);
      done();
    });
  });

});
