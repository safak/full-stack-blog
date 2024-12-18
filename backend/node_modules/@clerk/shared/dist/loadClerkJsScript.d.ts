import { Without, ClerkOptions, SDKMetadata } from '@clerk/types';

/**
 * Sets the package name for error messages during ClerkJS script loading.
 *
 * @example
 * setClerkJsLoadingErrorPackageName('@clerk/clerk-react');
 */
declare function setClerkJsLoadingErrorPackageName(packageName: string): void;
type LoadClerkJsScriptOptions = Without<ClerkOptions, 'isSatellite'> & {
    publishableKey: string;
    clerkJSUrl?: string;
    clerkJSVariant?: 'headless' | '';
    clerkJSVersion?: string;
    sdkMetadata?: SDKMetadata;
    proxyUrl?: string;
    domain?: string;
    nonce?: string;
};
/**
 * Hotloads the Clerk JS script.
 *
 * Checks for an existing Clerk JS script. If found, it returns a promise
 * that resolves when the script loads. If not found, it uses the provided options to
 * build the Clerk JS script URL and load the script.
 *
 * @param opts - The options used to build the Clerk JS script URL and load the script.
 *               Must include a `publishableKey` if no existing script is found.
 *
 * @example
 * loadClerkJsScript({ publishableKey: 'pk_' });
 */
declare const loadClerkJsScript: (opts?: LoadClerkJsScriptOptions) => Promise<unknown>;
/**
 * Generates a Clerk JS script URL.
 *
 * @param opts - The options to use when building the Clerk JS script URL.
 *
 * @example
 * clerkJsScriptUrl({ publishableKey: 'pk_' });
 */
declare const clerkJsScriptUrl: (opts: LoadClerkJsScriptOptions) => string;
/**
 * Builds an object of Clerk JS script attributes.
 */
declare const buildClerkJsScriptAttributes: (options: LoadClerkJsScriptOptions) => Record<string, string>;

export { type LoadClerkJsScriptOptions, buildClerkJsScriptAttributes, clerkJsScriptUrl, loadClerkJsScript, setClerkJsLoadingErrorPackageName };
