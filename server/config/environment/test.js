'use strict';

// Test specific configuration
// ===========================
var productionConfig = require('./production');

module.exports = {
  endpoints: productionConfig.endpoints.concat([

  ])
};
