import * as React from 'react';

import { LogService } from './log-service';

export const defaultLogService: LogService = {
    info: () => undefined,
    warn: () => undefined,
    error: () => undefined
};

const LogContext = React.createContext<LogService>(defaultLogService);

export type LogProviderProps = {
    service?: LogService;
    children: React.ReactNode;
};
export function LogProvider({ service, ...props }: LogProviderProps) {
    const logService = service ?? defaultLogService;
    return <LogContext.Provider value={logService} {...props} />;
}

export function useLog(): LogService {
    return React.useContext(LogContext);
}
