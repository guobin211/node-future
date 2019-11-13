const isEmail = /(\w+)@(\w).(\w+)/i
const re = /(\w+)\s(\w+)/

let immediate =setImmediate(() => {
  console.log('immediate')
})

let interval = setInterval(() => {
  console.log('setInterval')
}, 1000)

let timeout = setTimeout(() => {
  console.log('setTimeout')
})