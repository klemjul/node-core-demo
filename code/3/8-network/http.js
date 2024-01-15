/**
 * The http module in Node.js provides functionality to create and handle HTTP servers and clients.
 * Source: https://nodejs.org/api/http.html
 */

'use strict'
const { opendir } = require('fs/promises')
const { createServer } = require('http')
const { Readable, Transform, pipeline } = require('stream')

const transformDirStreamToJson = () => {
  let syntax = '[\n'
  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    transform(entry, enc, next) {
      next(null, `${syntax} "${entry.name}"`)
      syntax = ',\n'
    },
    final(cb) {
      this.push('\n]\n')
      cb()
    },
  })
}

const httpServer = createServer(async (req, res) => {
  try {
    const dir = await opendir(req.url === '/' ? __dirname : req.url)
    res.setHeader('Content-Type', 'application/json')
    pipeline(Readable.from(dir), transformDirStreamToJson(), res, (err) => {
      if (err) console.error(err)
    })
  } catch (ex) {
    res.statusCode = 404
    res.end('Not found')
  }
})

httpServer.listen(3000)
