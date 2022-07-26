import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export type MainContentProps = {
    children: React.ReactNode;
};
export function MainContentComponent({ children }: MainContentProps) {
    return (
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
        </Box>
    );
}

export default MainContentComponent;
