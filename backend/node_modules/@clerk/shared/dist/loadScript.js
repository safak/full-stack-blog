"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/loadScript.ts
var loadScript_exports = {};
__export(loadScript_exports, {
  loadScript: () => loadScript
});
module.exports = __toCommonJS(loadScript_exports);

// src/utils/runWithExponentialBackOff.ts
var defaultOptions = {
  firstDelay: 125,
  maxDelay: 0,
  timeMultiple: 2,
  shouldRetry: () => true
};
var sleep = async (ms) => new Promise((s) => setTimeout(s, ms));
var createExponentialDelayAsyncFn = (opts) => {
  let timesCalled = 0;
  const calculateDelayInMs = () => {
    const constant = opts.firstDelay;
    const base = opts.timeMultiple;
    const delay = constant * Math.pow(base, timesCalled);
    return Math.min(opts.maxDelay || delay, delay);
  };
  return async () => {
    await sleep(calculateDelayInMs());
    timesCalled++;
  };
};
var runWithExponentialBackOff = async (callback, options = {}) => {
  let iterationsCount = 0;
  const { shouldRetry, firstDelay, maxDelay, timeMultiple } = {
    ...defaultOptions,
    ...options
  };
  const delay = createExponentialDelayAsyncFn({ firstDelay, maxDelay, timeMultiple });
  while (true) {
    try {
      return await callback();
    } catch (e) {
      iterationsCount++;
      if (!shouldRetry(e, iterationsCount)) {
        throw e;
      }
      await delay();
    }
  }
};

// src/loadScript.ts
var NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
var NO_SRC_ERROR = "loadScript cannot be called without a src";
async function loadScript(src = "", opts) {
  const { async, defer, beforeLoad, crossOrigin, nonce } = opts || {};
  const load = () => {
    return new Promise((resolve, reject) => {
      if (!src) {
        reject(NO_SRC_ERROR);
      }
      if (!document || !document.body) {
        reject(NO_DOCUMENT_ERROR);
      }
      const script = document.createElement("script");
      crossOrigin && script.setAttribute("crossorigin", crossOrigin);
      script.async = async || false;
      script.defer = defer || false;
      script.addEventListener("load", () => {
        script.remove();
        resolve(script);
      });
      script.addEventListener("error", () => {
        script.remove();
        reject();
      });
      script.src = src;
      script.nonce = nonce;
      beforeLoad == null ? void 0 : beforeLoad(script);
      document.body.appendChild(script);
    });
  };
  return runWithExponentialBackOff(load, { shouldRetry: (_, iterations) => iterations < 5 });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  loadScript
});
//# sourceMappingURL=loadScript.js.map