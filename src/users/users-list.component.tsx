import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export type EmptyUserListProps = {
    show: boolean;
};
export function EmptyUserList({ show }: EmptyUserListProps) {
    if (!show) return null;
    return (
        <Box data-testid={'user-list-empty-message'}>
            <Typography>No users found</Typography>
        </Box>
    );
}

export type User = {
    email: string;
    name: string;
};
export type UsersListProps = {
    users?: User[];
};

export function UsersListComponent({ users }: UsersListProps) {
    const hasUsers = users && users.length > 0;
    return (
        <Typography variant='h2' data-testid={'users-section'}>
            <EmptyUserList show={!hasUsers} />
        </Typography>
    );
}

export default UsersListComponent;
