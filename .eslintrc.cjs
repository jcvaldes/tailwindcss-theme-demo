module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:import/typescript', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single', {
      avoidEscape: true
    }],
    '@typescript-eslint/quotes': ['error', 'single', {
      avoidEscape: true
    }],
    'react/jsx-uses-react': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', 'ts', 'tsx']
    }],
    'no-shadow': 'off',
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/consistent-type-definitions': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    'prettier/prettier': ['error', {}, {
      usePrettierrc: true
    }]
  }
};