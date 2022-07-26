import * as React from 'react';

import { cleanup, renderApp, screen, user } from './test-utils';
import { AppComponent } from '@/app';

describe('AppComponent', () => {
    afterEach(cleanup);

    it('Should render in Home page by default', async () => {
        renderApp(<AppComponent />);

        await screen.findByTestId('home-section');
    });

    it('Should render in Not Found page with /unknown', async () => {
        renderApp(<AppComponent />, { history: ['/unknown'] });

        await screen.findByTestId('notfound-section');
    });

    it('Should render in Home page with /', async () => {
        renderApp(<AppComponent />, { history: ['/'] });

        await screen.findByTestId('home-section');
    });

    it('Should render in Users page with /users', async () => {
        renderApp(<AppComponent />, { history: ['/users'] });

        await screen.findByTestId('users-section');
    });

    it('Should navigate from drawer', async () => {
        renderApp(<AppComponent />);

        await screen.findByTestId('home-section');

        const drawerButton = await screen.findByLabelText(/open drawer/i);
        await user.click(drawerButton);
        const usersButton = await screen.findByTestId(/menu-item-users/i);
        await user.click(usersButton);
        await screen.findByTestId('users-section');

        await user.click(drawerButton);
        const homeButton = await screen.findByTestId(/menu-item-home/i);
        await user.click(homeButton);
        await screen.findByTestId('home-section');
    });
});
