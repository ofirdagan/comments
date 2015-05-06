'use strict';

// Development specific configuration
// ==================================
var productionConfig = require('./production');

module.exports = {
  fullContact: require('../../../test/server/mocks/fullcontact-api-mock')('api-key'),
  endpoints: productionConfig.endpoints.concat([
    {
      route: '/api/bo',
      controller: './controllers/back-office.controller'
    }
  ])
};
