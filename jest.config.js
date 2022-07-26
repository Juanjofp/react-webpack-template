// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    coverageDirectory: './coverage/',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.(ts|tsx)',
        '!src/index.tsx',
        '!src/app/app.component.tsx'
    ],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90
        }
    },
    setupFilesAfterEnv: ['./setup-tests.ts'],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    testTimeout: 10000,
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
        '@/(.*)': '<rootDir>/src/$1'
    }
};
