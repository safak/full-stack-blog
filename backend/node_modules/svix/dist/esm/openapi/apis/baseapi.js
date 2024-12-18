export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
export class BaseAPIRequestFactory {
    constructor(configuration) {
        this.configuration = configuration;
    }
}
;
export class RequiredError extends Error {
    constructor(api, method, field) {
        super("Required parameter " + field + " was null or undefined when calling " + api + "." + method + ".");
        this.api = api;
        this.method = method;
        this.field = field;
        this.name = "RequiredError";
    }
}
//# sourceMappingURL=baseapi.js.map