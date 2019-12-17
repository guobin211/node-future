const fs = require('fs')
/*
* clearInterval
  clearTimeout
  setInterval
  setTimeout
  queueMicrotask
  clearImmediate
  setImmediate
* */
// console.log(global)
console.log(global.queueMicrotask)

let i = 1

function printTask() {
  console.log(i++)
}

/*
 * 宏任务
 * 1. setTimeout setInterval
 * 2. setImmediate requestAnimationFrame
 * 3. I/O
 * */

fs.readFile('./es2018.js', () => {
  console.log('node I/O')
  printTask()
})

setImmediate(() => {
  console.log('setImmediate')
  printTask()
})

setTimeout(() => {
  console.log('setTimeout')
  printTask()
})

/*
 * 微任务
 * 1. process.nextTick
 * 2. Promise queueMicrotask  MutationObserver
 * */

global.queueMicrotask(() => {
  console.log('queueMicrotask')
  printTask()
})

Promise.resolve().then(() => {
  console.log('Promise')
  printTask()
})

process.nextTick(() => {
  console.log('process.nextTick')
  printTask()
})

printTask()
