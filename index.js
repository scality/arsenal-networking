/* eslint-disable global-require */

exports.http = {
  Agent: require('./lib/http-agent').default,
};

exports.https = {
  Agent: require('./lib/https-agent').default,
};

exports.AgentConfiguration = require('./lib/config/agentConfiguration').default;
