module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files with ts-jest
      '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript files with babel-jest
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['<rootDir>/src/tests/**/*.test.(ts|tsx|js|jsx)'],
  };
  