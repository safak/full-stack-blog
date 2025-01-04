import { from } from './rxjsStub';
export class PromiseMiddlewareWrapper {
    constructor(middleware) {
        this.middleware = middleware;
    }
    pre(context) {
        return from(this.middleware.pre(context));
    }
    post(context) {
        return from(this.middleware.post(context));
    }
}
//# sourceMappingURL=middleware.js.map