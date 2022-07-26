import * as React from 'react';

import Typography from '@mui/material/Typography';

export function NotFoundComponent() {
    return (
        <Typography variant='h2' data-testid={'notfound-section'}>
            Not found, sorry!
        </Typography>
    );
}

export default NotFoundComponent;
