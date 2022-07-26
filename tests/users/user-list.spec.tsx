import * as React from 'react';

import { renderWithDeps, screen } from '../test-utils';
import { UsersListComponent } from '@/users';

describe('UserListComponent', () => {
    it('should render a message no users when receive an empty list', async () => {
        renderWithDeps(<UsersListComponent users={[]} />);

        await screen.findByTestId('user-list-empty-message');
    });

    it('should not render the empty message when has users', async () => {
        const users = [
            {
                name: 'John Doe',
                email: 'johndoe@none.es'
            }
        ];
        renderWithDeps(<UsersListComponent users={users} />);

        expect(
            screen.queryByTestId('user-list-empty-message')
        ).not.toBeInTheDocument();
    });
});
