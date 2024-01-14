/**
 * These are a special type of duplex stream where the output is computed based on the input. They are commonly used for data transformation.
 * Example: Using a transform stream to gzip compress data.
 * Source: https://nodejs.org/api/stream.html#class-streamtransform
 */

import { scrypt } from 'crypto'
import { Transform } from 'stream'

const createTransformStream = () => {
  return new Transform({
    encoding: 'hex',
    transform(chunk, enc, next) {
      scrypt(chunk, 'a-salt', 32, (err, key) => {
        if (err) {
          next(err)
          return
        }
        next(null, key)
      })
    },
  })
}
const transform = createTransformStream()
transform.on('data', (data) => {
  console.log('got data:', data)
})
transform.write('A\n')
transform.write('B\n')
transform.write('C\n')
transform.end('nothing more to write')
