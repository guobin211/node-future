/**
 * test
 *
 * @author GuoBin on 2019-06-30
 */
const { spawn } = require("child_process")
const terminal = spawn("node", ["-v"])
terminal.stdout.on("data", buff => {
  console.log(buff.toString())
})
terminal.stdout.on("close", () => {
  console.log("close")
})
terminal.stderr.on("data", err => {
  console.log(err.toString())
})
process.on("uncaughtException", error => {
  console.error(error)
})

function Person(name = "", age = 0) {
  this._name = name
  this._age = age
}

const p1 = new Person("jack", 22)
const p2 = new Person("tom", 19)

console.log(p1.name)
