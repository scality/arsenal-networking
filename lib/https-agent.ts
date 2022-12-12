import HttpsAgent, { HttpsOptions } from 'agentkeepalive';
import clientConfigurationDefault from './config/default';
import maxSocketsConfiguration from './config/maxSockets';

/**
 * @class AgentHttpsKeepAlive
 * Abstracts the native HttpsAgent class from agentkeepalive to enforce common
 * networking configuration across components.
 */
export default class AgentHttps extends HttpsAgent {
    /**
     * Constructor for the AgentHttpsKeepAlive class
     *
     * @param opts - Custom HTTP Agent options
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
            defaultConfigurations = maxSocketsConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
