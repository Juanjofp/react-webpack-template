import * as React from 'react';

import { render } from './test-utils';
import { LogProvider, useLog, buildConsoleLogService } from '@/app';

describe('Log service should', () => {
    function ViewWithLog() {
        const { info, warn, error } = useLog();
        info('Info message');
        warn('Warning message');
        error('Error message');
        error({ send: true, store: false }, new Error('BooM'));
        return null;
    }

    let spyLog: jest.SpyInstance;
    beforeEach(() => {
        spyLog = jest.spyOn(console, 'log');
        spyLog.mockImplementation(() => undefined);
    });
    afterEach(() => {
        spyLog.mockRestore();
    });

    it('do not crash when not add LogProvider', () => {
        render(<ViewWithLog />);

        expect(spyLog).toHaveBeenCalledTimes(0);
    });

    it('do not print nothing when LogService not provided', () => {
        render(
            <LogProvider>
                <ViewWithLog />
            </LogProvider>
        );

        expect(spyLog).toHaveBeenCalledTimes(0);
    });

    it('call console log with log, error and warn message when use with ConsoleLogService', () => {
        const consoleLogService = buildConsoleLogService();
        const TestComponent = () => (
            <LogProvider service={consoleLogService}>
                <ViewWithLog />
            </LogProvider>
        );
        render(<TestComponent />);

        expect(spyLog).toHaveBeenCalledTimes(4);
        expect(spyLog).toHaveBeenNthCalledWith(1, 'INFO', '"Info message"');
        expect(spyLog).toHaveBeenNthCalledWith(
            2,
            'WARNING',
            '"Warning message"'
        );
        expect(spyLog).toHaveBeenNthCalledWith(3, 'ERROR', '"Error message"');

        expect(spyLog).toHaveBeenNthCalledWith(
            4,
            'ERROR',
            '{"send":true,"store":false}',
            '{}'
        );
    });
});
