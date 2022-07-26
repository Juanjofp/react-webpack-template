import * as React from 'react';

import * as RTL from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { buildI18nServiceMock } from './i18n-service-mock';
import { buildLogServiceMock } from './log-service-mock';
import { AppDependencies, I18nService, LogService } from '@/app';

export * from '@testing-library/react';

export function renderApp(
    ui: React.ReactElement,
    {
        index = 0,
        history = ['/'],
        logService = buildLogServiceMock(),
        i18nService = buildI18nServiceMock(),
        ...rest
    }: {
        index?: number;
        history?: string[];
        logService?: LogService;
        i18nService?: I18nService;
    } = {}
) {
    function Wrapper(props: Record<string, unknown>) {
        return (
            <AppDependencies logService={logService} i18nService={i18nService}>
                <MemoryRouter
                    initialIndex={index}
                    initialEntries={history}
                    {...props}
                />
            </AppDependencies>
        );
    }
    const queries = RTL.render(ui, { wrapper: Wrapper, ...rest });
    return {
        ...queries,
        logService
    };
}

export function renderWithDeps(
    ui: React.ReactElement,
    {
        logService = buildLogServiceMock(),
        i18nService = buildI18nServiceMock(),
        ...rest
    }: { logService?: LogService; i18nService?: I18nService } = {}
) {
    function Wrapper(props: Record<string, unknown>) {
        return (
            <AppDependencies logService={logService} i18nService={i18nService}>
                <div {...props} />
            </AppDependencies>
        );
    }
    const queries = RTL.render(ui, { wrapper: Wrapper, ...rest });
    return {
        ...queries
    };
}

export const user = userEvent;
