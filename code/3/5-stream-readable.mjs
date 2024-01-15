/**
 * These streams are used for reading data. They can be consumed by a writable stream or processed directly.
 * Example: Reading a file with `fs.createReadStream`
 * Source: https://nodejs.org/api/stream.html#readable-streams
 */

import { Readable } from 'stream'

const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    objectMode: true,
    read() {
      setTimeout(() => {
        if (data.length === 0) this.push(null)
        else this.push(data.shift())
      }, 1000)
    },
  })
}
const readable = createReadStream()
readable.on('data', (data) => {
  console.log('got data', data)
})
readable.on('end', () => {
  console.log('finished reading')
})
