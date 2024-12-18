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

// src/localStorageBroadcastChannel.ts
var localStorageBroadcastChannel_exports = {};
__export(localStorageBroadcastChannel_exports, {
  LocalStorageBroadcastChannel: () => LocalStorageBroadcastChannel
});
module.exports = __toCommonJS(localStorageBroadcastChannel_exports);
var KEY_PREFIX = "__lsbc__";
var LocalStorageBroadcastChannel = class {
  constructor(name) {
    this.eventTarget = window;
    this.postMessage = (data) => {
      if (typeof window === "undefined") {
        return;
      }
      try {
        window.localStorage.setItem(this.channelKey, JSON.stringify(data));
        window.localStorage.removeItem(this.channelKey);
      } catch (e) {
      }
    };
    this.addEventListener = (eventName, listener) => {
      this.eventTarget.addEventListener(this.prefixEventName(eventName), (e) => {
        listener(e);
      });
    };
    this.setupLocalStorageListener = () => {
      const notifyListeners = (e) => {
        if (e.key !== this.channelKey || !e.newValue) {
          return;
        }
        try {
          const data = JSON.parse(e.newValue || "");
          const event = new MessageEvent(this.prefixEventName("message"), {
            data
          });
          this.eventTarget.dispatchEvent(event);
        } catch (e2) {
        }
      };
      window.addEventListener("storage", notifyListeners);
    };
    this.channelKey = KEY_PREFIX + name;
    this.setupLocalStorageListener();
  }
  prefixEventName(eventName) {
    return this.channelKey + eventName;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LocalStorageBroadcastChannel
});
//# sourceMappingURL=localStorageBroadcastChannel.js.map