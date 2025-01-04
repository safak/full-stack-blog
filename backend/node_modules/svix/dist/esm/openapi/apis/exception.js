export class ApiException extends Error {
    constructor(code, message, body, headers) {
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
            JSON.stringify(headers));
        this.code = code;
        this.body = body;
        this.headers = headers;
    }
}
//# sourceMappingURL=exception.js.map