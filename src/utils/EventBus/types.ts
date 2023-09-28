export type Callback = (...args: unknown[]) => void;
export type EventBusListeners = Record<string, Callback[]>;
