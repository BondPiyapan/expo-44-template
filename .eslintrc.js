module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript', // this is needed because airbnb uses eslint-plugin-import
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint', // not related to this problem but it helps
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': [2, {
      custom: 'ignore',
    }],
    semi: [2, 'never'],
    'react/style-prop-object': 0,
    camelcase: 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
  },
}
