//'use strict';
describe('Comments Controller', function () {
  var CommentsCtrl;

  beforeEach(function () {
    module('commentsApp');
    inject(function ($controller, $rootScope) {
      CommentsCtrl = $controller('CommentsCtrl', {
        $scope: $rootScope.$new()
      });
    })
  });

  it('should be defined', function () {
    expect(CommentsCtrl).toBeDefined();
  });
});
