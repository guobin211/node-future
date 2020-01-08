const fs = require('fs')

function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), timeout)
  })
}

function testSleep() {
  sleep(1000).then(_ => {
    console.log('sleep...')
  })
  console.log('testSleep')
}

// testSleep()

const arr = [1, 2, 3]
async function test() {
  for (const n of arr) {
    console.log('before(): ' + n)
    await sleep(500)
    console.log('after(): ' + n)
  }
  console.log('test(): over')
}

// test().then()

function stepTest() {
  for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i]
    console.log('before(): ' + arrElement)
    sleep(500).then(_ => {
      console.log(arrElement)
    })
    console.log('after(): ' + arrElement)
  }
}

stepTest()
// async and await 只能保证js 块区域最后执行
