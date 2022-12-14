const HttpAgent = require('agentkeepalive');
const agentConfiguration = require('./config/agentConfiguration');

/**
 * @class AgentHttp
 * Abstracts the native HttpAgent class from agentkeepalive to enforce common
 * networking configuration across components.
 */
class AgentHttp extends HttpAgent {
  /**
     * Constructor for the AgentHttp class
     *
     * @param opts - Custom HTTP Agent options
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

exports.default = AgentHttp;
