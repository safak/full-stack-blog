"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = exports.text = exports.buffer = exports.run = exports.sendError = exports.send = exports.createError = exports.HttpError = exports.serve = void 0;
const stream_1 = require("stream");
const content_type_1 = __importDefault(require("content-type"));
const raw_body_1 = __importDefault(require("raw-body"));
function isStream(stream) {
    return (stream !== null &&
        typeof stream === 'object' &&
        stream instanceof stream_1.Stream &&
        typeof stream.pipe === 'function');
}
function readable(stream) {
    return (isStream(stream) &&
        stream instanceof stream_1.Readable &&
        stream.readable);
}
const serve = (fn) => (req, res) => (0, exports.run)(req, res, fn);
exports.serve = serve;
class HttpError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
exports.HttpError = HttpError;
function isError(error) {
    return error instanceof Error || error instanceof HttpError;
}
const createError = (code, message, original) => {
    const err = new HttpError(message);
    err.statusCode = code;
    err.originalError = original;
    return err;
};
exports.createError = createError;
const send = (res, code, obj = null) => {
    res.statusCode = code;
    if (obj === null) {
        res.end();
        return;
    }
    if (Buffer.isBuffer(obj)) {
        if (!res.getHeader('Content-Type')) {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        res.setHeader('Content-Length', obj.length);
        res.end(obj);
        return;
    }
    if (obj instanceof stream_1.Stream || readable(obj)) {
        if (!res.getHeader('Content-Type')) {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        obj.pipe(res);
        return;
    }
    let str = obj;
    if (typeof obj === 'object' || typeof obj === 'number') {
        str = JSON.stringify(obj);
        if (!res.getHeader('Content-Type')) {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
        }
    }
    if (typeof str === 'string') {
        res.setHeader('Content-Length', Buffer.byteLength(str));
    }
    res.end(str);
};
exports.send = send;
const sendError = (req, res, errorObj) => {
    if ('statusCode' in errorObj && errorObj.statusCode) {
        (0, exports.send)(res, errorObj.statusCode, errorObj.message);
    }
    else
        (0, exports.send)(res, 500, 'Internal Server Error');
    if (errorObj instanceof Error) {
        console.error(errorObj.stack);
    }
    else {
        console.warn('thrown error must be an instance Error');
    }
};
exports.sendError = sendError;
const run = (req, res, fn) => new Promise((resolve) => {
    resolve(fn(req, res));
})
    .then((val) => {
    if (val === null) {
        (0, exports.send)(res, 204, null);
        return;
    }
    if (val !== undefined) {
        (0, exports.send)(res, res.statusCode || 200, val);
    }
})
    .catch((err) => {
    if (isError(err)) {
        (0, exports.sendError)(req, res, err);
    }
});
exports.run = run;
const rawBodyMap = new WeakMap();
const parseJSON = (str) => {
    try {
        return JSON.parse(str);
    }
    catch (err) {
        throw (0, exports.createError)(400, 'Invalid JSON', err);
    }
};
function isRawBodyError(error) {
    return 'type' in error;
}
const buffer = (req, { limit = '1mb', encoding } = {}) => Promise.resolve().then(() => {
    const type = req.headers['content-type'] || 'text/plain';
    const length = req.headers['content-length'];
    const body = rawBodyMap.get(req);
    if (body) {
        return body;
    }
    return (0, raw_body_1.default)(req, {
        limit,
        length,
        encoding: encoding ?? content_type_1.default.parse(type).parameters.charset,
    })
        .then((buf) => {
        rawBodyMap.set(req, buf);
        return buf;
    })
        .catch((err) => {
        if (isRawBodyError(err) && err.type === 'entity.too.large') {
            throw (0, exports.createError)(413, `Body exceeded ${limit} limit`, err);
        }
        else {
            throw (0, exports.createError)(400, 'Invalid body', err);
        }
    });
});
exports.buffer = buffer;
const text = (req, { limit, encoding } = {}) => (0, exports.buffer)(req, { limit, encoding }).then((body) => body.toString(encoding));
exports.text = text;
const json = (req, opts = {}) => (0, exports.text)(req, opts).then((body) => parseJSON(body));
exports.json = json;
