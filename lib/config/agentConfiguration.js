/**
 * The maximum socket configuration defaults to 50.
 */
const maxSocketsNumber = Number(process.env.MAX_SOCKETS) || 50;

/**
 * The default configuration for the maxSocket profile.
 * The goal is to enforce a `maxSockets` property to properly
 * handle load.
 */
const agentConfiguration = {
  keepAlive: true,
  maxSockets: maxSocketsNumber,
  maxFreeSockets: maxSocketsNumber,
};

exports.default = agentConfiguration;
