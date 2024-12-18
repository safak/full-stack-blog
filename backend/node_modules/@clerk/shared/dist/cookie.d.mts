type LocationAttributes = {
    path?: string;
    domain?: string;
};
declare function createCookieHandler(cookieName: string): {
    get(): string | undefined;
    /**
     * Setting a cookie will use some defaults such as path being set to "/".
     */
    set(newValue: string, options?: Cookies.CookieAttributes): void;
    /**
     * On removing a cookie, you have to pass the exact same path/domain attributes used to set it initially
     * @see https://github.com/js-cookie/js-cookie#basic-usage
     */
    remove(locationAttributes?: LocationAttributes): void;
};

export { createCookieHandler };
