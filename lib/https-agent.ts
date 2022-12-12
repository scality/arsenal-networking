import * as https from 'https';
import clientConfigurationDefault from './config/default';
import maxSocketsConfiguration from './config/maxSockets';

/**
 * @class AgentHttps
 * Abstracts the native https.Agent class to enforce common
 * networking configuration across components.
 */
 export default class AgentHttps extends https.Agent {
    /**
     * Constructor for the ClientHttps class
     *
     * @param opts - Custom HTTPs Agent options
     * @param config - user-defined default configuration to apply
     */
    constructor(
        opts?: https.AgentOptions,
        config: clientConfigurationDefault = {
            maxSockets: true,
        },
    ) {
        // Enforce TCP session reuse configuration, unless explicitely specified.
        let defaultConfigurations: https.AgentOptions = {};
        if (config.maxSockets) {
            defaultConfigurations = maxSocketsConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
