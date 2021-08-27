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
import AsList from './components/AsList';
import styles from './app.module.less'
import demos from './demos/input'
const App: FC = () => {
  return (
    <>
      <div className={styles['app-container']}>
        {demos()}
      </div>
      {/* <AsList></AsList>
      <div>aaa</div> */}
    </>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))