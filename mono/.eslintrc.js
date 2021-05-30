module.exports = {
    env: {
      es2021: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
    },
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  };
  