type Listener<T> = (e: MessageEvent<T>) => void;
declare class LocalStorageBroadcastChannel<E> {
    private readonly eventTarget;
    private readonly channelKey;
    constructor(name: string);
    postMessage: (data: E) => void;
    addEventListener: (eventName: "message", listener: Listener<E>) => void;
    private setupLocalStorageListener;
    private prefixEventName;
}

export { LocalStorageBroadcastChannel };
