/**
 * Retry callback function every few hundred ms (with an exponential backoff
 * based on the current attempt) until the maximum attempts has reached or
 * the callback is executed successfully. The default number of maximum
 * attempts is 5 and retries are triggered when callback throws an error.
 */
declare function callWithRetry<T>(fn: (...args: unknown[]) => Promise<T>, attempt?: number, maxAttempts?: number): Promise<T>;

export { callWithRetry };
