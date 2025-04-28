/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Ignore compiled JavaScript files in dist directory
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Optional: Add setup files, reporters, etc. here
  // setupFilesAfterEnv: ['./jest.setup.js'],
  // Clear mocks between tests
  clearMocks: true,
  // Specify test file pattern
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  // Directory where test results and coverage reports will be stored
  // coverageDirectory: "coverage",
};
