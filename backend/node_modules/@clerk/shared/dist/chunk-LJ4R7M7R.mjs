// src/browser.ts
function inBrowser() {
  return typeof window !== "undefined";
}
var botAgents = [
  "bot",
  "spider",
  "crawl",
  "APIs-Google",
  "AdsBot",
  "Googlebot",
  "mediapartners",
  "Google Favicon",
  "FeedFetcher",
  "Google-Read-Aloud",
  "DuplexWeb-Google",
  "googleweblight",
  "bing",
  "yandex",
  "baidu",
  "duckduck",
  "yahoo",
  "ecosia",
  "ia_archiver",
  "facebook",
  "instagram",
  "pinterest",
  "reddit",
  "slack",
  "twitter",
  "whatsapp",
  "youtube",
  "semrush"
];
var botAgentRegex = new RegExp(botAgents.join("|"), "i");
function userAgentIsRobot(userAgent) {
  return !userAgent ? false : botAgentRegex.test(userAgent);
}
function isValidBrowser() {
  const navigator = inBrowser() ? window == null ? void 0 : window.navigator : null;
  if (!navigator) {
    return false;
  }
  return !userAgentIsRobot(navigator == null ? void 0 : navigator.userAgent) && !(navigator == null ? void 0 : navigator.webdriver);
}
function isBrowserOnline() {
  var _a, _b;
  const navigator = inBrowser() ? window == null ? void 0 : window.navigator : null;
  if (!navigator) {
    return false;
  }
  const isNavigatorOnline = navigator == null ? void 0 : navigator.onLine;
  const isExperimentalConnectionOnline = ((_a = navigator == null ? void 0 : navigator.connection) == null ? void 0 : _a.rtt) !== 0 && ((_b = navigator == null ? void 0 : navigator.connection) == null ? void 0 : _b.downlink) !== 0;
  return isExperimentalConnectionOnline && isNavigatorOnline;
}
function isValidBrowserOnline() {
  return isBrowserOnline() && isValidBrowser();
}

export {
  inBrowser,
  userAgentIsRobot,
  isValidBrowser,
  isBrowserOnline,
  isValidBrowserOnline
};
//# sourceMappingURL=chunk-LJ4R7M7R.mjs.map