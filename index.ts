import maxSocketsConfiguration from "./lib/config/maxSockets";
import httpAgent from "./lib/http-agent";
import httpsAgent from "./lib/https-agent";

export const http = {
    Agent: httpAgent,
};

export const https = {
    Agent: httpsAgent,
};

export const maxSocketsDefaultConfiguration = maxSocketsConfiguration;
