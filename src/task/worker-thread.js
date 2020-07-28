const { Worker, isMainThread } = require("worker_threads")
let res = 0
let subRes = 0
if (isMainThread) {
  console.log("在主线程中")
  res = sum(10, 20)
  const wk = new Worker(__filename)
  wk.addListener("exit", exitCode => {
    console.log(res + subRes)
  })
} else {
  console.log("在工作线程中")
  subRes = sum(1, 2)
  console.log(subRes)
}

function sum(a, b) {
  console.log("js程序执行")
  return a + b
}
