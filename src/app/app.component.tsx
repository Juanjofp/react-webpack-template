import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { I18nService, useI18next, I18nProvider } from './i18n';
import { buildConsoleLogService, LogService, LogProvider } from './log';
import { MainComponent } from './main.component';
import { menuItems as defaultMenuItems, MenuItem } from './models';
import { RoutesComponent } from './routes';

export type AppRouterProps = {
    children: React.ReactNode;
};
export function AppRouter({ children }: AppRouterProps) {
    return <BrowserRouter>{children}</BrowserRouter>;
}

export type AppDependenciesProps = {
    children: React.ReactNode;
    logService: LogService;
    i18nService: I18nService;
};
export function AppDependencies({
    children,
    logService,
    i18nService
}: AppDependenciesProps) {
    return (
        <LogProvider service={logService}>
            <I18nProvider service={i18nService}>{children}</I18nProvider>
        </LogProvider>
    );
}

export type AppProps = {
    menuItems?: MenuItem[];
};
export function AppComponent({ menuItems = defaultMenuItems }: AppProps = {}) {
    return (
        <MainComponent menuItems={menuItems}>
            <RoutesComponent />
        </MainComponent>
    );
}

export function App() {
    const i18nService = useI18next();
    const logService = buildConsoleLogService();
    return (
        <AppDependencies i18nService={i18nService} logService={logService}>
            <AppRouter>
                <AppComponent />
            </AppRouter>
        </AppDependencies>
    );
}

export default App;
