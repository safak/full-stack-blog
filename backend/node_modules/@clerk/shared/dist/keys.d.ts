import { PublishableKey } from '@clerk/types';

type ParsePublishableKeyOptions = {
    fatal?: boolean;
    domain?: string;
    proxyUrl?: string;
};
declare function buildPublishableKey(frontendApi: string): string;
declare function parsePublishableKey(key: string | undefined, options: ParsePublishableKeyOptions & {
    fatal: true;
}): PublishableKey;
declare function parsePublishableKey(key: string | undefined, options?: ParsePublishableKeyOptions): PublishableKey | null;
declare function isPublishableKey(key: string): boolean;
declare function createDevOrStagingUrlCache(): {
    isDevOrStagingUrl: (url: string | URL) => boolean;
};
declare function isDevelopmentFromPublishableKey(apiKey: string): boolean;
declare function isProductionFromPublishableKey(apiKey: string): boolean;
declare function isDevelopmentFromSecretKey(apiKey: string): boolean;
declare function isProductionFromSecretKey(apiKey: string): boolean;
declare function getCookieSuffix(publishableKey: string, subtle?: SubtleCrypto): Promise<string>;
declare const getSuffixedCookieName: (cookieName: string, cookieSuffix: string) => string;

export { buildPublishableKey, createDevOrStagingUrlCache, getCookieSuffix, getSuffixedCookieName, isDevelopmentFromPublishableKey, isDevelopmentFromSecretKey, isProductionFromPublishableKey, isProductionFromSecretKey, isPublishableKey, parsePublishableKey };
