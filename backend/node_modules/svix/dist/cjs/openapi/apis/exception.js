"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
class ApiException extends Error {
    constructor(code, message, body, headers) {
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
            JSON.stringify(headers));
        this.code = code;
        this.body = body;
        this.headers = headers;
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=exception.js.map