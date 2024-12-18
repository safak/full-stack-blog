/**
 * Converts an array of strings to a comma-separated sentence
 * @param items {Array<string>}
 * @returns {string} Returns a string with the items joined by a comma and the last item joined by ", or"
 */
declare const toSentence: (items: string[]) => string;
declare function isIPV4Address(str: string | undefined | null): boolean;
declare function titleize(str: string | undefined | null): string;
declare function snakeToCamel(str: string | undefined): string;
declare function camelToSnake(str: string | undefined): string;
/**
 * Transforms camelCased objects/ arrays to snake_cased.
 * This function recursively traverses all objects and arrays of the passed value
 * camelCased keys are removed.
 */
declare const deepCamelToSnake: (obj: any) => any;
/**
 * Transforms snake_cased objects/ arrays to camelCased.
 * This function recursively traverses all objects and arrays of the passed value
 * camelCased keys are removed.
 */
declare const deepSnakeToCamel: (obj: any) => any;
/**
 * Returns true for `true`, true, positive numbers.
 * Returns false for `false`, false, 0, negative integers and anything else.
 */
declare function isTruthy(value: unknown): boolean;
declare function getNonUndefinedValues<T extends object>(obj: T): Partial<T>;

export { camelToSnake, deepCamelToSnake, deepSnakeToCamel, getNonUndefinedValues, isIPV4Address, isTruthy, snakeToCamel, titleize, toSentence };
