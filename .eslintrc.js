module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'mathspace',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier', 'import'],
  rules: {
    'class-methods-use-this': 'off',
    'react/jsx-curly-brace-presence': [{ children: 'ignore' }],
    'react/require-default-props': 'off',
    'import/extensions': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['./'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
