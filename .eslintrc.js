module.exports = {
  'extends': [
    'standard',
    'plugin:react/recommended'
  ],
  'globals': {
    'requestAnimationFrame': true,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true
    }
  },
}
