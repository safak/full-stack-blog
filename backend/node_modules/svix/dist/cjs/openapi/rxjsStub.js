"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.mergeMap = exports.of = exports.from = exports.Observable = void 0;
class Observable {
    constructor(promise) {
        this.promise = promise;
    }
    toPromise() {
        return this.promise;
    }
    pipe(callback) {
        return new Observable(this.promise.then(callback));
    }
}
exports.Observable = Observable;
function from(promise) {
    return new Observable(promise);
}
exports.from = from;
function of(value) {
    return new Observable(Promise.resolve(value));
}
exports.of = of;
function mergeMap(callback) {
    return (value) => callback(value).toPromise();
}
exports.mergeMap = mergeMap;
function map(callback) {
    return callback;
}
exports.map = map;
//# sourceMappingURL=rxjsStub.js.map