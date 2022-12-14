const agentConfiguration = require('./lib/config/agentConfiguration');

const httpAgent = require('./lib/http-agent');
const httpsAgent = require('./lib/http-agent');

exports.HttpAgent = httpAgent;

exports.HttpsAgent = httpsAgent;

exports.AgentConfiguration = agentConfiguration;
