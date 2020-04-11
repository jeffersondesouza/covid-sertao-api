/* eslint-disable global-require */
const envVariables = require('../services/envVariables');

if (envVariables.isProduction()) {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
