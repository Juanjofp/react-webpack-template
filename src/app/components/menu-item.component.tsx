import * as React from 'react';

import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export type MenuItemProps = {
    selected?: boolean;
    handleNavigate: (path: string) => () => void;
    path: string;
    icon: string;
    name: string;
};

export function MenuItemComponent({
    handleNavigate,
    icon,
    name,
    path,
    selected
}: MenuItemProps) {
    return (
        <ListItem
            button
            onClick={handleNavigate(path)}
            selected={selected}
            data-testid={`menu-item-${name}`}
        >
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    );
}
