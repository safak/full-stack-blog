"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
const error_1 = require("./error");
const handle = async (file) => {
    let mod;
    try {
        mod = await import(file);
        mod = await mod.default;
    }
    catch (err) {
        if (isErrorObject(err) && err.stack) {
            (0, error_1.logError)(`Error when importing ${file}: ${err.stack}`, 'invalid-entry');
        }
        process.exit(1);
    }
    if (typeof mod !== 'function') {
        (0, error_1.logError)(`The file "${file}" does not export a function.`, 'no-export');
        process.exit(1);
    }
    return mod;
};
exports.handle = handle;
function isErrorObject(error) {
    return error.stack !== undefined;
}
