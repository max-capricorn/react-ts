/*
 * @Author: sheng.wang
 * @Date: 2021-03-17 10:22:07
 * @LastEditTime: 2021-03-24 15:11:48
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/utils/path.ts
 */
import path from 'path'
interface Path {
  getPath: (dir: string) => string
  DIST: ReturnType<typeof getPath>
  MATCH_NODE_MODULES: ReturnType<typeof getPath>
  PATH_SRC: ReturnType<typeof getPath>
}
const getPath = function (dir: string) {
  const appDirectory = process.cwd()
  return path.join(appDirectory, dir)
}
export default <Path>{
  getPath,
  DIST: getPath('dist'),
  MATCH_NODE_MODULES: getPath('/node_modules'),
  PATH_SRC: getPath('/src')
}
