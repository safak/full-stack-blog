import {
  isValidBrowser
} from "./chunk-LJ4R7M7R.mjs";
import "./chunk-7ELT755Q.mjs";

// src/webauthn.ts
function isWebAuthnSupported() {
  return isValidBrowser() && // Check if `PublicKeyCredential` is a constructor
  typeof window.PublicKeyCredential === "function";
}
async function isWebAuthnAutofillSupported() {
  try {
    return isWebAuthnSupported() && await window.PublicKeyCredential.isConditionalMediationAvailable();
  } catch (e) {
    return false;
  }
}
async function isWebAuthnPlatformAuthenticatorSupported() {
  try {
    return typeof window !== "undefined" && await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
  } catch (e) {
    return false;
  }
}
export {
  isWebAuthnAutofillSupported,
  isWebAuthnPlatformAuthenticatorSupported,
  isWebAuthnSupported
};
//# sourceMappingURL=webauthn.mjs.map