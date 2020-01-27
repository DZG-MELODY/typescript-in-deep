module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
  ],
  overrides: [{
    files: ["**/*.ts", "**/*.tsx"],
    env: {
      browser: true,
      node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: "./tsconfig.json"
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    "rules": {
      "semi": "off",
      "@typescript-eslint/semi": "error"
    }
  }]
}

// module.exports = {
//   "env": { "browser": true, "es6": true, "node": true },
//   "extends": ["eslint:recommended", "plugin:react/recommended"],
//   "globals": { "Atomics": "readonly", "SharedArrayBuffer": "readonly" },
//   "parser": "babel-eslint",
//   "parserOptions": {
//     "ecmaFeatures": { "jsx": true },
//     "ecmaVersion": 2018,
//     "sourceType": "module"
//   },
//   "plugins": ["react"],
//   "rules": {
//     "indent": ["error", 2, { "SwitchCase": 1 }],
//     "linebreak-style": ["error", "unix"],
//     "quotes": ["error", "single"],
//     "comma-dangle": ["error", "always-multiline"],
//     "semi": ["error", "always"]
//   },
//   "settings": { "react": { "version": "detect" } },
//   "overrides": [
//     {
//       "files": ["**/*.ts", "**/*.tsx"],
//       "env": { "browser": true, "es6": true, "node": true },
//       "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:@typescript-eslint/eslint-recommended",
//         "plugin:@typescript-eslint/recommended"
//       ],
//       "globals": { "Atomics": "readonly", "SharedArrayBuffer": "readonly" },
//       "parser": "@typescript-eslint/parser",
//       "parserOptions": {
//         "ecmaFeatures": { "jsx": true },
//         "ecmaVersion": 2018,
//         "sourceType": "module",
//         "project": "./tsconfig.json"
//       },
//       "plugins": ["react", "@typescript-eslint"],
//       "rules": {
//         "indent": ["error", 2, { "SwitchCase": 1 }],
//         "linebreak-style": ["error", "unix"],
//         "quotes": ["error", "single"],
//         "comma-dangle": ["error", "always-multiline"],
//         "@typescript-eslint/no-explicit-any": 0
//       },
//       "settings": { "react": { "version": "detect" } }
//     }
//   ]
// }