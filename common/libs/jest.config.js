module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/?(*.)+(test).+(ts)', '**/?(*.)+(test).+(ts)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  testEnvironment: 'node',
  verbose: true,
};
