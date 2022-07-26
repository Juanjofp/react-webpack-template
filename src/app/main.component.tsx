import * as React from 'react';
import { Suspense } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import LinearProgress from '@mui/material/LinearProgress';
import { ThemeProvider } from '@mui/material/styles';

import { MainContentComponent } from './components';
import { useMainHook } from './main.hook';
import { MenuItem } from './models';
import { lightTheme } from './themes';

export type MainProps = {
    children?: React.ReactNode;
    menuItems: MenuItem[];
};

const AppBarComponent = React.lazy(
    () => import('./components/app-bar.component')
);
const DrawerComponent = React.lazy(
    () => import('./components/drawer.component')
);

export function MainComponent({ children, menuItems }: MainProps) {
    const { open, handleCloseDrawer, handleToggleDrawer } = useMainHook();
    return (
        <ThemeProvider theme={lightTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Suspense fallback={<LinearProgress />}>
                    <AppBarComponent onMenuClick={handleToggleDrawer} />
                    <DrawerComponent
                        onCloseDrawer={handleCloseDrawer}
                        open={open}
                        menuItems={menuItems}
                    />
                </Suspense>
                <MainContentComponent data-testid={'main-content-component'}>
                    {children}
                </MainContentComponent>
            </Box>
        </ThemeProvider>
    );
}
