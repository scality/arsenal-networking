import * as http from 'http';
import clientConfigurationDefault from './config/default';

/**
 * @class AgentHttp
 * Abstracts the native http.Agent class to enforce common
 * networking configuration across components.
 */
export default class AgentHttp extends http.Agent {
    /**
     * The maximum socket configuration defaults to 50.
     */
    private static maxSocketsConfiguration = Number(process.env.MAX_SOCKETS) || 50;

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
        const defaultConfigurations: http.AgentOptions = {};
        if (config.maxSockets) {
            defaultConfigurations.keepAlive = true;
            defaultConfigurations.maxSockets = AgentHttp.maxSocketsConfiguration;
            defaultConfigurations.maxFreeSockets = AgentHttp.maxSocketsConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
