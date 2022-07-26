import * as React from 'react';

import { cleanup, renderApp, screen, user } from './test-utils';
import { MainComponent } from '@/app';

describe('MainComponent', () => {
    afterEach(cleanup);

    it('renders with two elements menu', async () => {
        const menuItems = [
            { name: 'menu1', path: '/menu1', icon: 'iconmenu1' },
            { name: 'menu2', path: '/menu2', icon: 'iconmenu2' }
        ];
        renderApp(<MainComponent menuItems={menuItems} />);

        const drawerButton = await screen.findByLabelText(/open drawer/i);
        await user.click(drawerButton);
        const menuItemsButtons = await screen.findAllByTestId(/menu-item/);
        expect(menuItemsButtons.length).toBe(2);

        for (let i = 0; i < menuItemsButtons.length; i++) {
            expect(`${menuItems[i].icon}${menuItems[i].name}`).toEqual(
                menuItemsButtons[i].textContent
            );
        }
    });
});
