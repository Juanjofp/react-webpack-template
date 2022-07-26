import * as React from 'react';

import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';

import { MenuItem } from '../models';
import { MenuItemComponent } from './menu-item.component';
import { shouldBeSelected } from './menu.utils';

export type MenuProps = {
    menuItems: MenuItem[];
    handleNavigate: (path: string) => () => void;
};

export function MenuComponent({ menuItems, handleNavigate }: MenuProps) {
    const { pathname } = useLocation();

    return (
        <List>
            {menuItems.map(({ icon, name, path }) => (
                <MenuItemComponent
                    key={path}
                    selected={shouldBeSelected(pathname, path)}
                    handleNavigate={handleNavigate}
                    icon={icon}
                    name={name}
                    path={path}
                />
            ))}
        </List>
    );
}

export default MenuComponent;
