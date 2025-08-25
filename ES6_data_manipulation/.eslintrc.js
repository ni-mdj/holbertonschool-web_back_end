module.exports = {
    env: {
      es2021: true,
      node: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: ['eslint:recommended'],
    rules: {
      'no-console': 'off',
    },
  };
  