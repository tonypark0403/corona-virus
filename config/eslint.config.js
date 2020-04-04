/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react', 'react-hooks'],

  extends: ['eslint:recommended', 'plugin:react/recommended'],

  rules: {
    'arrow-parens': ['error', 'always'],
    'linebreak-style': 0, //['error', 'windows'],
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'no-eval': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react/jsx-curly-spacing': 0,
    // 'react/jsx-curly-spacing': [
    //   'error',
    //   {
    //     attributes: {
    //       when: 'never',
    //     },
    //     children: {
    //       when: 'always',
    //     },
    //   },
    // ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: ['error', 'always'],
    'space-in-parens': 0, //['error', 'always', { exceptions: ['()', '[]', '{}'] }],
  },
};

/* eslint-enable */
