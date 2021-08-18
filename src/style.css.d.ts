/*
 * @Author: sheng.wang
 * @Date: 2021-03-17 16:26:53
 * @LastEditTime: 2021-03-17 16:39:50
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/typings.d.ts
 */
declare module '*.scss' {
  const content: { [key: string]: any }
  export = content
}
// less模块声明
declare module '*.less' {
  const content: { [key: string]: any }
  export = content
}
declare module '*.css' {
  const content: { [key: string]: any }
  export = content
}