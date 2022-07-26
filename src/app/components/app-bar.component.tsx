import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useI18nService } from '@/app';

export type AppBarProps = {
    onMenuClick: () => void;
};

export function AppBarComponent({ onMenuClick }: AppBarProps) {
    const { t } = useI18nService();
    return (
        <AppBar
            data-testid={'appbar-component'}
            position='fixed'
            sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    onClick={onMenuClick}
                    edge='start'
                    sx={{ mr: 2 }}
                    data-testid={'app-bar-menu-button'}
                >
                    <Icon>menu</Icon>
                </IconButton>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    data-testid={'appbar-title'}
                >
                    {t('app_bar_title')}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;
