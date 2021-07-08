module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: [
    // airbnb Best pratices: https://github.com/airbnb/javascript
    'airbnb-base',
    // code formatter
    'prettier',
    // Jest recommended Best pratices
    'plugin:jest/all',
  ],
  plugins: ['prettier'],
  rules: {
    // Bad prettier format to be display as error
    'prettier/prettier': ['error'],
    // add always a newline before a return statement
    'newline-before-return': ['error'],
  },
  // eslint support for .ts files
  // UPDATE: We if want to use airbnb with typescript maybe we should use this: https://github.com/iamturns/eslint-config-airbnb-typescript
  overrides: [
    {
      files: '**/*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin', 'import'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
      settings: {
        // adds TypeScript support to eslint-plugin-import.
        // https://github.com/alexgorbatchev/eslint-import-resolver-typescript
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          // use <root>/tsconfig.json
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
