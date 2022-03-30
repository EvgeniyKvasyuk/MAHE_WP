module.exports = {
  plugins: [
    ['postcss-import', {
      path: 'src/theme/styles',
    }],
    'postcss-mixins',
    'postcss-simple-vars',
    'postcss-nested',
    ['postcss-custom-properties', {
      preserve: false,
    }],
    'postcss-color-mod-function',
    'postcss-flexbugs-fixes',
    ['postcss-preset-env', {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }],
    'postcss-calc',
    'autoprefixer',
  ],
};
