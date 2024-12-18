export declare class ApiException<T> extends Error {
    code: number;
    body: T;
    headers: {
        [key: string]: string;
    };
    constructor(code: number, message: string, body: T, headers: {
        [key: string]: string;
    });
}
