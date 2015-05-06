'use strict';

var request = require('request');

function ServerConfig() {
  function promisePost(url, params) {
    var defer = protractor.promise.defer();
    request.post(browser.baseUrl + url, {
      json: true,
      body: params
    }, function (error, message) {
      defer.fulfill(message);
    });
    return defer.promise;
  }

  this.post = function (url, params) {
    var flow = protractor.promise.controlFlow();
    flow.execute(function () {
      return promisePost(url, params);
    });
  };
}

module.exports = new ServerConfig();
