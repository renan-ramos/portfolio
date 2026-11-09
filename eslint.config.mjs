import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-plugin-prettier/recommended'

const eslintConfig = [
  ...nextVitals,
  prettier,
  {
    rules: {
      'no-unused-vars': 'error',
      'react/no-unescaped-entities': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
  }
]

export default eslintConfig
