module.exports = {
    ...require('./test/jest-common'),
    collectCoverageFrom: [
        '**/src/**/*.(ts|tsx)',
        '!**/__tests__/**',
        '!**/__server_tests__/**',
        '!**/node_modules/**',
    ],
    coverageThreshold: {
        global: {
            statements: 10,
            branches: 5,
            functions: 15,
            lines: 8,
        },
        './src/utils/*.ts': {
            statements: 100,
            branches: 80,
            functions: 100,
            lines: 100,
        },
    },
    projects: [
        './test/jest.client.js',
        './test/jest.lint.js',
    ],
};
