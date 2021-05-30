module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: ['*.yaml', '*.yml', '*.json'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
