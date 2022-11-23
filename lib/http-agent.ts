import * as http from 'http';
import clientConfigurationDefault from './config/default';

/**
 * @class ClientHttp
 * Abstracts the native http.Agent class to enforce common
 * networking configuration across components.
 */
export default class ClientHttp extends http.Agent {
    /**
     * The maximum socket configuration defaults to 50.
     */
    private static maxSocketsConfiguration = Number(process.env.MAX_SOCKETS) || 50;

    /**
     * Constructor for the ClientHttp class
     *
     * @param opts - Custom HTTP Agent options
     * @param config - user-defined default configuration du apply
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
            defaultConfigurations.maxSockets = ClientHttp.maxSocketsConfiguration;
            defaultConfigurations.maxFreeSockets = ClientHttp.maxSocketsConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
