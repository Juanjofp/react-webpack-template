export const shouldBeSelected = (currentPath: string, path: string) =>
    (path === '/' && currentPath === '/') ||
    (currentPath.startsWith(path) && path !== '/');
