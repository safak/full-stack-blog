import { HttpLibrary } from "./http/http";
import { Middleware, PromiseMiddleware } from "./middleware";
import { BaseServerConfiguration } from "./servers";
import { AuthMethods, AuthMethodsConfiguration } from "./auth/auth";
export interface Configuration {
    readonly baseServer: BaseServerConfiguration;
    readonly httpApi: HttpLibrary;
    readonly middleware: Middleware[];
    readonly authMethods: AuthMethods;
}
export interface ConfigurationParameters {
    baseServer?: BaseServerConfiguration;
    httpApi?: HttpLibrary;
    middleware?: Middleware[];
    promiseMiddleware?: PromiseMiddleware[];
    authMethods?: AuthMethodsConfiguration;
}
export declare function createConfiguration(conf?: ConfigurationParameters): Configuration;
