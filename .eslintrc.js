module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'import', 'react', 'react-hooks'],
  rules: {
    'react/prop-types': [
      'error',
      { ignore: ['navigation', 'style', 'children', 'route', 'onPress'] },
    ],
    'no-unused-vars': 1,
    'react/forbid-prop-types': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'react/jsx-one-expression-per-line': 0,
    'no-use-before-define': 0,
    'global-require': 0,
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 1,
  },
  ignorePatterns: ['/*.*'],
};
