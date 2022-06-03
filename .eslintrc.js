module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
  },
};
