module.exports = {
    ...require('./jest-common'),
    displayName: 'client',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/setup-tests.js'],
    testMatch: ['**/__tests__/**/*.test.tsx'],
};
