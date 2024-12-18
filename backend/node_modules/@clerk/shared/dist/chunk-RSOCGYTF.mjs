// src/localStorageBroadcastChannel.ts
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

export {
  LocalStorageBroadcastChannel
};
//# sourceMappingURL=chunk-RSOCGYTF.mjs.map