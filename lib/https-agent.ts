import * as https from 'https';
import clientConfigurationDefault from './config/default';

/**
 * @class ClientHttps
 * Abstracts the native https.Agent class to enforce common
 * networking configuration across components.
 */
 export default class ClientHttps extends https.Agent {
    /**
     * The maximum socket configuration defaults to 50.
     */
    private static maxSocketsConfiguration = Number(process.env.MAX_SOCKETS) || 50;

    /**
     * Constructor for the ClientHttps class
     *
     * @param opts - Custom HTTPs Agent options
     * @param config - user-defined default configuration du apply
     */
    constructor(
        opts?: https.AgentOptions,
        config: clientConfigurationDefault = {
            maxSockets: true,
        },
    ) {
        // Enforce TCP session reuse configuration, unless explicitely specified.
        const defaultConfigurations: https.AgentOptions = {};
        if (config.maxSockets) {
            defaultConfigurations.keepAlive = true;
            defaultConfigurations.maxSockets = ClientHttps.maxSocketsConfiguration;
            defaultConfigurations.maxFreeSockets = ClientHttps.maxSocketsConfiguration;
        }
        super({
            ...opts,
            ...defaultConfigurations,
        });
    }
}
