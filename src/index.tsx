/*
 * @Author: sheng.wang
 * @Date: 2021-03-16 13:58:24
 * @LastEditTime: 2021-03-17 16:35:50
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/src/index.tsx
 */
import React, { FC } from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';
const App: FC = () => {
  return (
    <div className={styles.add}><img src="./assets/WechatIMG17.jpeg" alt="" /></div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))