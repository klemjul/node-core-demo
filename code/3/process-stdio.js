/**
 * Process module provides information about, and control over, the Node.js process,
 * here we demo some some methods to work with stdin, stdout, stderr (they represent standard input, standard output, and standard error, respectively).
 * Sources:
 * - https://nodejs.org/api/process.html#processstdin
 * - https://nodejs.org/api/process.html#processstderr
 * - https://nodejs.org/api/process.html#processstdout
 */

'use strict'
// redirect stdin to stdout
process.stdin.pipe(process.stdout)

console.group('------- STDOUT')
// write to stdout
process.stdout.write('Write to stdout using stream\n')
console.log('Write to stdout using console.log\n')
console.groupEnd()

console.group('------- STDERR')
// write to stderr
process.stderr.write('Write to stderr using stream\n')
console.error('Write to stder using console.error\n')
console.groupEnd()
