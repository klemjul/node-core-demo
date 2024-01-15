/**
 * Buffer is a core class that provides a way to work with binary data directly.
 * It is particularly useful when dealing with I/O operations, networking, or when working with binary protocols.
 * Source: https://nodejs.org/api/buffer.html
 */

'use strict'
const assert = require('assert')

const str = 'buffers are neat'
const strHex = '6275666665727320617265206e656174'
const strb64 = 'YnVmZmVycyBhcmUgbmVhdA=='

// Dont do this, it use Buffer.allocUnsafe under the hood
// const fromString = new Buffer(str, 'utf-8')

const fromString = Buffer.from(str, 'utf-8')
const fromBase64 = Buffer.from(strb64, 'base64')
const fromHex = Buffer.from(strHex, 'hex')

assert.equal(str, fromString.toString('utf-8'))
assert.equal(str, fromBase64.toString('utf-8'))
assert.equal(str, fromHex.toString('utf-8'))

assert.equal(strHex, fromString.toString('hex'))
assert.equal(strb64, fromString.toString('base64'))

console.log('Assertions passed successfully!')
