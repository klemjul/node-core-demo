/**
 * Net is a core module in Node.js and is used for creating TCP servers and clients.
 * Here we demo a tcp client
 * Source: https://nodejs.org/api/net.html
 */

const net = require('net')

// Create a TCP client
const client = new net.Socket()

// Connect to the server on port 3000
const PORT = 3000
const HOST = 'localhost'
client.connect(PORT, HOST, () => {
  // Send data to the server
  client.write('Hello, server!')

  // Close the connection after sending data
  client.end()
})
