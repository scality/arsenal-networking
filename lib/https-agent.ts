import { HttpsAgent, HttpsOptions } from 'agentkeepalive';
import clientConfigurationDefault from './config/default';
import agentConfiguration from './config/agentConfiguration';

/**
 * @class AgentHttps
 * Abstracts the native HttpsAgent class from agentkeepalive to enforce common
 * networking configuration across components.
 */
export default class AgentHttps extends HttpsAgent {
    /**
     * Constructor for the AgentHttps class
     *
     * @param opts - Custom HTTPs Agent options
     * @param config - user-defined default configuration to apply
     */
    constructor(
        opts?: HttpsOptions,
        config: clientConfigurationDefault = {
            maxSockets: true,
        },
    ) {
        // Enforce TCP session reuse configuration, unless explicitely specified.
        let defaultConfigurations: HttpsOptions = {};
        if (config.maxSockets) {
            defaultConfigurations = agentConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
