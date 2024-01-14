const { setTimeout: setTimeoutAsync } = require('timers/promises')

const first = () => console.log('first')
const second = async () => {
  await setTimeoutAsync(500)
  console.log('second')
}
const third = () => console.log('third')

first()
second()
third()
