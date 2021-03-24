/*
 * @Author: sheng.wang
 * @Date: 2021-03-18 15:28:28
 * @LastEditTime: 2021-03-24 16:31:59
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /react-cli/src/app.tsx
 */
import React, { FC } from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';
import Home from '@/pages/home'
console.log('stylesswsw', styles)
const App: FC = () => {
  const a = 1
  return (
    <div className={styles.add}>
         <Home />
      <div>clear</div>
      <div>我是女生</div>
      <img src={require('./assets/WechatIMG17.jpeg')} alt="" />
      <img src={require("./assets/author-img.jpeg")} alt="" />
      <div className={styles.abcde}>hhahhahhaa </div>
      aasdhausdiasdkmklan 哈哈哈
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))