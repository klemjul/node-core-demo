const { spawn } = require('child_process')
const { join } = require('path')

// Start TCP server in a child process
const serverProcess = spawn(
  process.execPath,
  [join(__dirname, 'tcp-server.js')],
  {
    stdio: 'inherit',
  }
)

// Give the server some time to start before starting the client
setTimeout(() => {
  // Start TCP client in another child process
  const clientProcess = spawn(
    process.execPath,
    [join(__dirname, 'tcp-client.js')],
    {
      stdio: 'inherit',
    }
  )

  // Listen for the client process to exit
  clientProcess.on('close', (code) => {
    console.log(`Client process exited with code ${code}`)
    console.log(`Terminate the server process after the client process exits`)
    serverProcess.kill()
  })
}, 2000) // Wait for 2 seconds before starting the client
