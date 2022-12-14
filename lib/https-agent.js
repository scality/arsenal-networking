const { HttpsAgent } = require('agentkeepalive');
const agentConfiguration = require('./config/agentConfiguration');

/**
 * @class AgentHttps
 * Abstracts the native HttpsAgent class from agentkeepalive to enforce common
 * networking configuration across components.
 */
class AgentHttps extends HttpsAgent {
  /**
     * Constructor for the AgentHttps class
     *
     * @param opts - Custom HTTPs Agent options
     * @param config - user-defined default configuration to apply
     */
  constructor(opts, config = {
    maxSockets: true,
  }) {
    // Enforce TCP session reuse configuration, unless explicitely specified.
    let defaultConfigurations = {};
    if (config.maxSockets) {
      defaultConfigurations = agentConfiguration;
    }
    super({ ...opts, ...defaultConfigurations });
  }
}

exports.default = AgentHttps;
