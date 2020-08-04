const date = new Date()
const time = Date.now()

console.log(date, time)
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString())
console.log(date.toDateString())
console.log(date.toISOString())

const target = new Date("2020-8-4 11:10:11")
console.log(target)
