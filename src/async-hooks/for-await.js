const fs = require("fs")

const files = fs.readdirSync("./")
let i = 1
let b = 1
function timer() {
  files.forEach(item => {
    console.log(i++)
    setTimeout(() => {
      console.log(b++)
      console.log(item)
    }, 500)
  })
}

// timer()

files.forEach(item => {
  const res = fs.readFileSync(item)
  // console.log(res.length)
})

async function testAw() {
  for await (const line of fs.readFileSync(files[0])) {
    console.log(line)
  }
}

// testAw().then()

async function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

async function test(n) {
  console.log("do before sleep(): " + n)
  await sleep(1000)
  console.log("do after sleep()" + n)
}

async function testArr() {
  ;[0, 1, 2].forEach(test)
  // 不保证最后执行
  console.log("testArr(): over")
}

testArr().then()
async function testFaw() {
  await Promise.all([0, 1, 2].map(test))
  // 保证最后执行
  console.log("testFaw(): over")
}

testFaw().then()
