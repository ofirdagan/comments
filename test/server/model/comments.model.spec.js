
describe('comments logic', function () {
  var   comments;

  beforeEach(function () {
     comments = require('../../../server/model/comments.model');
  });

  afterEach(function () {
    comments.set([]);
  });
});
