module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['import', '@typescript-eslint', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/require-default-props': 'off',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
    'consistent-return': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: 'error',
    'max-params': ['warn', 4],

    'global-require': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-interface': 'off',
    'react/prop-types': 'off',
    camelcase: 'warn',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'import/no-cycle': 'error',
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'unknown', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/extensions': ['error', { ts: 'never', tsx: 'never', json: 'always' }],
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/no-unused-modules': [1, { missingExports: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true, varsIgnorePattern: '^React$', args: 'after-used', argsIgnorePattern: '^_$',
      },
    ],
    curly: 'error',
    'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['error'],
    'no-underscore-dangle': 'warn',
    'no-plusplus': 'warn',
    'no-bitwise': 'warn',
    'operator-assignment': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'if', 'for', 'try'], next: 'return' },
    ],
    'import/no-useless-path-segments': 'warn',
    'array-callback-return': 'warn',
    'no-param-reassign': 'warn',
    'no-restricted-syntax': 'warn',
    'no-prototype-builtins': 'warn',
    'no-case-declarations': 'warn',
    'import/newline-after-import': 'warn',
    'prefer-destructuring': 'warn',
    'no-return-assign': 'warn',
    'max-classes-per-file': 'warn',
    'class-methods-use-this': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/static-property-placement': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/sort-comp': 'warn',
    'no-dupe-class-members': 'warn',
    'no-useless-return': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-restricted-globals': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/function-component-definition': 'off',
    'no-unused-expressions': 'warn',
    'no-continue': 'warn',
    'import/no-named-as-default': 'warn',
    'no-useless-escape': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'no-template-curly-in-string': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    'react/display-name': 'warn',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ["**/store.ts"],
      rules: {
        "no-param-reassign": ["off"],
      }
    }
  ]
};
