// src/utils/runtimeEnvironment.ts
var isDevelopmentEnvironment = () => {
  try {
    return process.env.NODE_ENV === "development";
  } catch (err) {
  }
  return false;
};
var isTestEnvironment = () => {
  try {
    return process.env.NODE_ENV === "test";
  } catch (err) {
  }
  return false;
};
var isProductionEnvironment = () => {
  try {
    return process.env.NODE_ENV === "production";
  } catch (err) {
  }
  return false;
};

export {
  isDevelopmentEnvironment,
  isTestEnvironment,
  isProductionEnvironment
};
//# sourceMappingURL=chunk-QMOEH4QX.mjs.map