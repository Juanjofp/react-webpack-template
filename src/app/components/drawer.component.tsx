import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import { MenuItem } from '../models';
import { MenuComponent } from './menu.component';

export type DrawerComponentProps = {
    onCloseDrawer: () => void;
    menuItems: MenuItem[];
    open?: boolean;
};

export function DrawerComponent({
    onCloseDrawer,
    open,
    menuItems
}: DrawerComponentProps) {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => () => {
        navigate(path);
        onCloseDrawer();
    };

    return (
        <Drawer open={open} onClose={onCloseDrawer}>
            <Box sx={{ width: '250px' }}>
                <Toolbar />
                <MenuComponent
                    menuItems={menuItems}
                    handleNavigate={handleNavigate}
                />
            </Box>
        </Drawer>
    );
}

export default DrawerComponent;
