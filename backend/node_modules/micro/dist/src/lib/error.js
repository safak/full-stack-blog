"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = void 0;
function logError(message, errorCode) {
    console.error(`micro: ${message}`);
    console.error(`micro: https://err.sh/micro/${errorCode}`);
}
exports.logError = logError;
