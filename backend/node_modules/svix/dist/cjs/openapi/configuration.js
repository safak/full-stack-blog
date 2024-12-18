"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = void 0;
const middleware_1 = require("./middleware");
const isomorphic_fetch_1 = require("./http/isomorphic-fetch");
const servers_1 = require("./servers");
const auth_1 = require("./auth/auth");
function createConfiguration(conf = {}) {
    const configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : servers_1.server1,
        httpApi: conf.httpApi || new isomorphic_fetch_1.IsomorphicFetchHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: (0, auth_1.configureAuthMethods)(conf.authMethods)
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(m => configuration.middleware.push(new middleware_1.PromiseMiddlewareWrapper(m)));
    }
    return configuration;
}
exports.createConfiguration = createConfiguration;
//# sourceMappingURL=configuration.js.map