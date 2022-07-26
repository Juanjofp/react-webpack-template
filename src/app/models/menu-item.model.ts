export type MenuItem = {
    name: string;
    path: string;
    icon: string;
};

export const menuItems: MenuItem[] = [
    {
        name: 'Home',
        path: '/',
        icon: 'home'
    },
    {
        name: 'Users',
        path: '/users',
        icon: 'people'
    }
];
