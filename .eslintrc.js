// eslint-disable-next-line
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    "operator-linebreak": ["error", "before", { "overrides": { "=": "ignore", "?": "ignore", ":": "ignore" } }],
    "quotes": ["error", "double"],
    "comma-dangle": ["error", "only-multiline"],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': [
          'state',
          'acc',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
        ],
      },
    ],
    'max-len': 'off',
    'vue/no-use-v-if-with-v-for': [
      'error', {
        'allowUsingIterationVar': true,
      }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
