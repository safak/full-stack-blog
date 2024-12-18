import { TelemetryCollector as TelemetryCollector$1, TelemetryEventRaw } from '@clerk/types';

type TelemetryCollectorOptions = {
    /**
     * If true, telemetry will not be collected.
     */
    disabled?: boolean;
    /**
     * If true, telemetry will not be sent, but collected events will be logged to the console.
     */
    debug?: boolean;
    /**
     * Sampling rate, 0-1
     */
    samplingRate?: number;
    /**
     * Set a custom buffer size to control how often events are sent
     */
    maxBufferSize?: number;
    /**
     * The publishableKey to associate with the collected events.
     */
    publishableKey?: string;
    /**
     * The secretKey to associate with the collected events.
     */
    secretKey?: string;
    /**
     * The current clerk-js version.
     */
    clerkVersion?: string;
    /**
     * The SDK being used, e.g. `@clerk/nextjs` or `@clerk/remix`.
     */
    sdk?: string;
    /**
     * The version of the SDK being used.
     */
    sdkVersion?: string;
};

/**
 * The `TelemetryCollector` class handles collection of telemetry events from Clerk SDKs. Telemetry is opt-out and can be disabled by setting a CLERK_TELEMETRY_DISABLED environment variable.
 * The `ClerkProvider` also accepts a `telemetry` prop that will be passed to the collector during initialization:
 *
 * ```jsx
 * <ClerkProvider telemetry={false}>
 *    ...
 * </ClerkProvider>
 * ```
 *
 * For more information, please see the telemetry documentation page: https://clerk.com/docs/telemetry
 */

declare class TelemetryCollector implements TelemetryCollector$1 {
    #private;
    constructor(options: TelemetryCollectorOptions);
    get isEnabled(): boolean;
    get isDebug(): boolean;
    record(event: TelemetryEventRaw): void;
}

type ComponentMountedBase = {
    component: string;
};
type EventPrebuiltComponentMounted = ComponentMountedBase & {
    appearanceProp: boolean;
    elements: boolean;
    variables: boolean;
    baseTheme: boolean;
};
type EventComponentMounted = ComponentMountedBase & {
    [key: string]: boolean | string;
};
/**
 * Helper function for `telemetry.record()`. Create a consistent event object for when a prebuilt (AIO) component is mounted.
 *
 * @param component - The name of the component.
 * @param props - The props passed to the component. Will be filtered to a known list of props.
 *
 * @example
 * telemetry.record(eventPrebuiltComponentMounted('SignUp', props));
 */
declare function eventPrebuiltComponentMounted(component: string, props?: Record<string, any>): TelemetryEventRaw<EventPrebuiltComponentMounted>;
/**
 * Helper function for `telemetry.record()`. Create a consistent event object for when a component is mounted. Use `eventPrebuiltComponentMounted` for prebuilt components.
 *
 * **Caution:** Filter the `props` you pass to this function to avoid sending too much data.
 *
 * @param component - The name of the component.
 * @param props - The props passed to the component. Ideally you only pass a handful of props here.
 *
 * @example
 * telemetry.record(eventComponentMounted('SignUp', props));
 */
declare function eventComponentMounted(component: string, props?: Record<string, string | boolean>): TelemetryEventRaw<EventComponentMounted>;

type EventMethodCalled = {
    method: string;
} & Record<string, string | number | boolean>;
/**
 * Fired when a helper method is called from a Clerk SDK.
 */
declare function eventMethodCalled(method: string, payload?: Record<string, unknown>): TelemetryEventRaw<EventMethodCalled>;

export { TelemetryCollector, type TelemetryCollectorOptions, eventComponentMounted, eventMethodCalled, eventPrebuiltComponentMounted };
