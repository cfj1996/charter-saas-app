module.exports = {
  env: {
    "browser": true,
    "es6": true
  },
  extends: [
    "react-app",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    "react",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [0],
    "import/extensions":"off",
    "indent": ["error", 2],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80
        tabWidth: 2, //一个tab代表几个空格数，默认为2
        semi: true
      }
    ],
  }
};
