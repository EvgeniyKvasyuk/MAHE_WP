module.exports = {
  defaultSeverity: 'error',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': null,
    'declaration-bang-space-after': 'never',
    'declaration-block-no-duplicate-properties': null,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'function-calc-no-unspaced-operator': true,
    'function-url-quotes': 'always',
    'no-descending-specificity': null,
    'no-eol-whitespace': true,
    'no-invalid-double-slash-comments': null,
    'no-unknown-animations': true,
    'property-no-unknown': [true, { ignoreProperties: ['text-decoration-skip-ink'] }],
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unit-no-unknown': true,
  },
  ignoreFiles: ['./build/**/*.css', '*.js'],
};
