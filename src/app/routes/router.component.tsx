import * as React from 'react';
import { Suspense } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import { Routes, Route } from 'react-router-dom';

const HomeComponent = React.lazy(() => import('./home'));
const UsersComponent = React.lazy(() => import('../../users'));
const NotFoundComponent = React.lazy(() => import('./not-found'));

export function RoutesComponent() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <Routes>
                <Route path='*' element={<NotFoundComponent />} />
                <Route path='/' element={<HomeComponent />} />
                <Route path='/users/*' element={<UsersComponent />} />
            </Routes>
        </Suspense>
    );
}

export default RoutesComponent;
