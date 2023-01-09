module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'prefer-const': 2,
    curly: [2, 'all'],
    'no-redeclare': [2, { builtinGlobals: true }],
    'operator-linebreak': [2, 'before'],
    'no-console': 2,
    'brace-style': [2, '1tbs'],
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: 'block-like', next: '*' }
    ],

    // React
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'standard/no-callback-literal': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': [2, 'never'],
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Typescript
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/ban-types': ['error', {
      extendDefaults: true,
      types: {
        '{}': false
      }
    }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off'
  }
};
