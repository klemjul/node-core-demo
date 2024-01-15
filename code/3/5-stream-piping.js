/**
 * Streams can be easily piped together, allowing data to flow from one stream to another. This is a common practice for efficient data processing.
 * Source: https://nodejs.org/api/stream.html#event-pipe
 */

const { Readable, Writable } = require('stream')

// Readable stream that produces numbers from 1 to 5
class NumberSource extends Readable {
  constructor(options) {
    super(options)
    this.currentNumber = 1
  }

  _read() {
    if (this.currentNumber > 5) {
      this.push(null) // No more data
    } else {
      this.push(`${this.currentNumber++}`) // Push the current number
    }
  }
}

// Writable stream that logs data to the console
class ConsoleSink extends Writable {
  _write(chunk, encoding, next) {
    console.log(`Received data: ${chunk}`)
    next()
  }
}

// Create instances of the streams
const numberSource = new NumberSource()
const textSource = Readable.from(['we', 'love', 'node'])
const consoleSink = new ConsoleSink()

// Pipe the readable stream to the writable stream
numberSource.pipe(consoleSink)
textSource.pipe(consoleSink)
