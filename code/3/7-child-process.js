/**
 * The child_process module in Node.js serves the purpose of allowing developers to spawn and interact with child processes
 * Example: interacting with external commands, parallel executions
 * Source: https://nodejs.org/api/child_process.html
 */

const { spawn, spawnSync, execSync } = require('child_process')

const demoExecSync = (command, args) => {
  const stdout = execSync(`${command} ${args.join(' ')}`)
  console.log(`Child process stdout: ${stdout}`)
}

const demoSpawnSync = (command, args) => {
  const childProcessResult = spawnSync(command, args)

  console.log(`Child process stdout: ${childProcessResult.stdout}`)

  console.log(`Child process stderr: ${childProcessResult.stderr}`)

  console.log(`Child process exited with code ${childProcessResult.status}`)
}

const demoSpawn = (command, args) => {
  const childProcess = spawn(command, args)

  childProcess.stdout.on('data', (data) => {
    console.log(`Child process stdout: ${data}`)
  })

  childProcess.stderr.on('data', (data) => {
    console.error(`Child process stderr: ${data}`)
  })

  childProcess.on('close', (exitCode) => {
    console.log(`Child process exited with code ${exitCode}`)
  })
}

// demoExecSync(process.execPath, ['-p', '"1 + 1"'])
// demoExecSync(process.execPath, ['-e', '"throw Error(\'kaboom\')"'])
demoSpawn('ls', ['-l', '-a'])
// demoSpawnSync(process.execPath, [
//   '-e',
//   `
// console.log("hello from child stdout");
// console.error("hello from child stderr");`,
// ])
