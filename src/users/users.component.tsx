import * as React from 'react';
import { Suspense } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import { Route, Routes } from 'react-router-dom';

const UsersListComponent = React.lazy(() => import('./users-list.component'));

export function UsersComponent() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <Routes>
                <Route index element={<UsersListComponent />} />
            </Routes>
        </Suspense>
    );
}

export default UsersComponent;
