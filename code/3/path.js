/**
 * path module in Node.js provides utilities for working with file and directory paths
 * Source: https://nodejs.org/api/path.html
 */

'use strict'
const {
  parse,
  basename,
  dirname,
  extname,
  relative,
  resolve,
  join,
  sep,
} = require('path')
console.log('filename parsed:', parse(__filename))
console.log('filename basename:', basename(__filename))
console.log('filename dirname:', dirname(__filename))
console.log('filename extname:', extname(__filename))
console.log(
  'add cross-platform separator between two file',
  join('mydir', 'myfile.txt')
)

console.log(
  'relative between home and this file: ',
  relative(`${sep}home`, __dirname)
)
console.log('resolve absolute path of this file:', resolve('.', __filename))
