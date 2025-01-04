export declare class Observable<T> {
    private promise;
    constructor(promise: Promise<T>);
    toPromise(): Promise<T>;
    pipe<S>(callback: (value: T) => S | Promise<S>): Observable<S>;
}
export declare function from<T>(promise: Promise<any>): Observable<any>;
export declare function of<T>(value: T): Observable<T>;
export declare function mergeMap<T, S>(callback: (value: T) => Observable<S>): (value: T) => Promise<S>;
export declare function map(callback: any): any;
