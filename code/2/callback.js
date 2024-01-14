const first = () => console.log('first')
const second = () => {
  setTimeout(() => {
    console.log('second')
  }, 500)
}
const third = () => console.log('third')

first()
second()
third()
