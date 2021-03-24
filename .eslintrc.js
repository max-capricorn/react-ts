/*
 * @Author: sheng.wang
 * @Date: 2021-03-24 15:36:50
 * @LastEditTime: 2021-03-24 16:38:10
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: ['@swc/core', '@typescript-eslint/parser'],
  exclude: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin：prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaVersion: '@next',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {}
}
