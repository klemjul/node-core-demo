/**
 * These streams are used for writing data. They can be fed data from a readable stream or directly written to.
 * Example: writing a file with `fs.createWriteStream`
 * Source: https://nodejs.org/api/stream.html#writable-streams
 */
import { Writable } from 'stream'

const createWriteStream = (data) => {
  return new Writable({
    objectMode: true,
    write(chunk, enc, next) {
      setTimeout(() => {
        data.push(chunk)
        next()
      }, 1000)
    },
  })
}
const data = []
const writable = createWriteStream(data)
writable.on('finish', () => {
  console.log('finished writing', data)
})

writable.write('A\n')
writable.write('B\n')
writable.write(1)
writable.write({})
writable.end('nothing more to write')
