/**
 * Fs module stands for "file system," and it provides an API for interacting with the file system.
 * Here we demonstrate read directory and stats about a file
 * Source: https://nodejs.org/api/fs.html
 */

'use strict'
const { readdirSync, statSync } = require('fs')

const files = readdirSync('.')

for (const name of files) {
  const stat = statSync(name)
  const typeLabel = stat.isDirectory() ? 'dir: ' : 'file: '
  const { atime, birthtime, ctime, mtime } = stat
  console.group(typeLabel, name)
  console.log('last access time:', atime.toLocaleString())
  console.log('last meta change time:', ctime.toLocaleString())
  console.log('last content change time:', mtime.toLocaleString())
  console.log('created at:', birthtime.toLocaleString())
  console.groupEnd()
  console.log()
}
