import * as http from 'http';
import clientConfigurationDefault from './config/default';
import maxSocketsConfiguration from './config/maxSockets';

/**
 * @class AgentHttp
 * Abstracts the native http.Agent class to enforce common
 * networking configuration across components.
 */
export default class AgentHttp extends http.Agent {
    /**
     * Constructor for the AgentHttp class
     *
     * @param opts - Custom HTTP Agent options
     * @param config - user-defined default configuration to apply
     */
    constructor(
        opts?: http.AgentOptions,
        config: clientConfigurationDefault = {
            maxSockets: true,
        },
    ) {
        // Enforce TCP session reuse configuration, unless explicitely specified.
        let defaultConfigurations: http.AgentOptions = {};
        if (config.maxSockets) {
            defaultConfigurations = maxSocketsConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
