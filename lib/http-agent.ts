import HttpAgent, { HttpOptions } from 'agentkeepalive';
import clientConfigurationDefault from './config/default';
import maxSocketsConfiguration from './config/maxSockets';

/**
 * @class AgentHttpKeepAlive
 * Abstracts the native HttpAgent class from agentkeepalive to enforce common
 * networking configuration across components.
 */
export default class AgentHttp extends HttpAgent {
    /**
     * Constructor for the AgentHttpKeepAlive class
     *
     * @param opts - Custom HTTP Agent options
     * @param config - user-defined default configuration to apply
     */
    constructor(
        opts?: HttpOptions,
        config: clientConfigurationDefault = {
            maxSockets: true,
        },
    ) {
        // Enforce TCP session reuse configuration, unless explicitely specified.
        let defaultConfigurations: HttpOptions = {};
        if (config.maxSockets) {
            defaultConfigurations = maxSocketsConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
