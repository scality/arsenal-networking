import httpAgent from "./lib/http-agent";
import httpsAgent from "./lib/https-agent";

export const http = {
    Agent: httpAgent,
};

export const https = {
    Agent: httpsAgent,
};
