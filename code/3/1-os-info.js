/**
 * Os module provides a set of operating system-related utility methods and properties
 * Source: https://nodejs.org/api/os.html
 */

'use strict'
const os = require('os')

function secondsToHours(seconds) {
  return (seconds / 3600).toFixed(2) + ' hours'
}

function bytesToGB(bytes) {
  return (bytes / 1024 ** 3).toFixed(2) + ' GB'
}

console.table([
  { property: 'Hostname', value: os.hostname() },
  { property: 'Home dir', value: os.homedir() },
  { property: 'Temp dir', value: os.tmpdir() },
  { property: 'Platform', value: os.platform() },
  { property: 'System Uptime', value: secondsToHours(os.uptime()) },
  {
    property: 'Free Memory',
    value: bytesToGB(os.freemem()),
  },
  {
    property: 'Total Memory',
    value: bytesToGB(os.totalmem()),
  },
])
