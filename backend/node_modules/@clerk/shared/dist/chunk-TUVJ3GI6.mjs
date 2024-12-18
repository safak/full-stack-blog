// src/telemetry/events/method-called.ts
var EVENT_METHOD_CALLED = "METHOD_CALLED";
function eventMethodCalled(method, payload) {
  return {
    event: EVENT_METHOD_CALLED,
    payload: {
      method,
      ...payload
    }
  };
}

export {
  eventMethodCalled
};
//# sourceMappingURL=chunk-TUVJ3GI6.mjs.map