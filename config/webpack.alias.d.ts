/*
 * @Author: sheng.wang
 * @Date: 2021-03-18 16:34:24
 * @LastEditTime: 2021-03-21 18:22:30
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/config/webpack.alias.d.ts
 */
declare module '@/*'
declare module 'utils/*'
declare module 'purify-css';
declare module 'glob-all' {
  const content: string
  export default content
}