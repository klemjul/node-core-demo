/**
 * Net is a core module in Node.js and is used for creating TCP servers and clients.
 * Here we demo a tcp server
 * Source: https://nodejs.org/api/net.html
 */

const net = require('net')

// Create a TCP server
const server = net.createServer((socket) => {
  // New client connected
  console.log('Client connected')

  // Handle data received from the client
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`)
  })

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected')
  })
})

// Listen on port 3000
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
