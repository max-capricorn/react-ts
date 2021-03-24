/*
 * @Author: sheng.wang
 * @Date: 2021-03-24 16:27:25
 * @LastEditTime: 2021-03-24 16:27:25
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/scripts/verifyCommit.js
 */
const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const releaseRE = /^v\d/
const commitRE = /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
    chalk.red(
      `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
    ) +
    `    ${chalk.green(`feat: add 'comments' option`)}\n` +
    `    ${chalk.green(`fix: handle events on blur (close #28)`)}\n\n` +
    chalk.red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1)
}
