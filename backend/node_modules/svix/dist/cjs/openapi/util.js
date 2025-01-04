"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canConsumeForm = exports.isCodeInRange = void 0;
function isCodeInRange(codeRange, code) {
    if (codeRange === "0") {
        return true;
    }
    if (codeRange == code.toString()) {
        return true;
    }
    else {
        const codeString = code.toString();
        if (codeString.length != codeRange.length) {
            return false;
        }
        for (let i = 0; i < codeString.length; i++) {
            if (codeRange.charAt(i) != "X" && codeRange.charAt(i) != codeString.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}
exports.isCodeInRange = isCodeInRange;
function canConsumeForm(contentTypes) {
    return contentTypes.indexOf('multipart/form-data') !== -1;
}
exports.canConsumeForm = canConsumeForm;
//# sourceMappingURL=util.js.map