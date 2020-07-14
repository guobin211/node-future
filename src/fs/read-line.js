const readline = require("readline")
const fs = require("fs")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("请输入文件名: ", (answer) => {
  console.log("文件: ", answer)

  const res = fs.readFileSync(answer, { encoding: "utf-8", flag: "r" })
  if (res) {
    console.log(res)
  }

  rl.close()
})
