/**
 * Created by Ofir_Dagan on 5/5/15.
 */
var _ = require('lodash');

function FullContactApiMock () {

}
var mock = new FullContactApiMock();
module.exports = function (appApi) {
  return mock;
};
