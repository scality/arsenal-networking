import HttpAgent, { HttpsAgent } from 'agentkeepalive';

import { HttpsOptions, HttpOptions } from 'agentkeepalive';

declare namespace http {
    export interface clientConfigurationDefault {
        /**
         * Maximum Socket Number: true if TCP session reuse must be enabled
         */
        maxSockets?: boolean;
    }

    export class Agent extends HttpAgent {
        constructor(opts?: HttpOptions, config?: clientConfigurationDefault);
    }
}

declare namespace https {
    export interface clientConfigurationDefault {
        /**
         * Maximum Socket Number: true if TCP session reuse must be enabled
         */
        maxSockets?: boolean;
    }

    export class Agent extends HttpsAgent {
        constructor(opts?: HttpsOptions, config?: clientConfigurationDefault);
    }
}
