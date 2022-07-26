export type LogService = {
    info: (...args: (Record<string, unknown> | string)[]) => void;
    warn: (...args: (Record<string, unknown> | string)[]) => void;
    error: (...args: (Record<string, unknown> | string | Error)[]) => void;
};
