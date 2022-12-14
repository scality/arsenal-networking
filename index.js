const agentConfiguration = require('./lib/config/agentConfiguration');

const httpAgent = require('./lib/http-agent');
const httpsAgent = require('./lib/http-agent');

exports.http = {
  Agent: httpAgent,
};

exports.https = {
  Agent: httpsAgent,
};

exports.AgentConfiguration = agentConfiguration;
