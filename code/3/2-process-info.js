/**
 * Process module provides information about, and control over, the Node.js process,
 * here we demo some some utilities methods
 * Source: https://nodejs.org/api/process.html
 */

const [nodeBinaryPath, executedFilePath, ...args] = process.argv
const { HOME } = process.env

console.log(`nodeBinaryPath : ${nodeBinaryPath}`)
console.log(`executedFilePath : ${executedFilePath}`)
console.log(`args : ${args}`)
console.log(`process.env.HOME : ${HOME}`)
console.log(`process.cwd : ${process.cwd()}`)
