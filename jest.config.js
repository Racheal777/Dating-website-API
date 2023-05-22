/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/**/*.test.ts"],
    forceExit: true,
    verbose: true,
    transform: {
        '^.+\\.ts&': 'ts-jest'
    }
  };