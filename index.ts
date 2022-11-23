import httpAgent from "./lib/http-agent";
import httpsAgent from "./lib/https-agent";

export const http = {
    agent: httpAgent,
};

export const https = {
    agent: httpsAgent,
};
