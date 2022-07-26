import * as React from 'react';

export const useMainHook = () => {
    const [open, setOpen] = React.useState(false);

    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    const handleCloseDrawer = () => {
        setOpen(false);
    };

    return { open, handleCloseDrawer, handleToggleDrawer };
};
