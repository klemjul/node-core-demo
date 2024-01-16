/**
 * EventEmitter is a core module that provides an implementation of the observer pattern,
 * allowing objects to emit named events and listeners to subscribe to these events.
 * Examples: Streams, http server
 * Source: https://nodejs.org/api/events.html#class-eventemitter
 */

'use strict'
const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

// Emit tick event every 1 sec
let tickCount = 0
const emitTickEach1s = setInterval(() => {
  eventEmitter.emit('tick', tickCount)
  tickCount++
}, 1000)

const printHello = (tickCount) => {
  console.log(`hello ${tickCount}`)
}

// Remove all listeners after 5 seconds
setTimeout(() => {
  eventEmitter.removeAllListeners()
  // eventEmitter.removeAllListeners('tick')
  // eventEmitter.removeListener('tick', printHello)
}, 5000)

// Clear tick interval after 7 second
setTimeout(() => {
  clearInterval(emitTickEach1s)
}, 7000)

eventEmitter.once('tick', () => {
  console.log('hello once')
})
eventEmitter.on('tick', printHello)

eventEmitter.prependOnceListener('tick', () => {
  console.log('hello once at the beginning of the listeners array ')
})

console.log(
  `Number of listeners for eventEmitter: ${eventEmitter.listenerCount('tick')}`
)
