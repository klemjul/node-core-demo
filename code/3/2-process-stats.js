/**
 * Process module provides information about, and control over, the Node.js process,
 * here we demo some some methods for benchmarking around hardware usage
 * Source: https://nodejs.org/api/process.html
 */

'use strict'
const { uptime, cpuUsage, memoryUsage} = require('process')

const getUptime = () => `${uptime()} s`
const getCpuUsage = () => {
  const toSecond = (microsecond) => `${microsecond / 1e6} s`
  const { user, system } = cpuUsage()
  return {
    cpuUserUsage: toSecond(user),
    cpuSystemUsage: toSecond(system),
  }
}
const getMemoryUsage = () => {
  const toMB = (bytes) => `${Math.round((bytes / 1024 / 1024) * 100) / 100} MB`

  const { rss, heapTotal, heapUsed } = memoryUsage()
  return {
    ramAlocated: toMB(rss),
    ramHeapAlocated: toMB(heapTotal),
    ramHeapUsed: toMB(heapUsed),
  }
}
const getProcessStats = () => {
  return { processUptime: getUptime(), ...getCpuUsage(), ...getMemoryUsage() }
}

const stats = [getProcessStats()]

let iterations = 5

while (iterations--) {
  const arr = []
  let i = 100000
  // make the CPU do some work:
  while (i--) {
    arr.push({ [Math.sqrt(i)]: Math.sqrt(i) })
  }

  stats.push(getProcessStats())
}

console.table(stats)
