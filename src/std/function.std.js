console.log(Function)

function Person(name) {
  this.name = name
  this.time = new Date().toISOString()
  console.log("Person", this)
}

const print = (obj) => {
  console.log("print", this)
  console.log(obj)
}

function log(obj) {
  console.log("log", this)
  console.log(obj)
}

const jack = new Person("jack")

;(function() {
  print(jack)
})()
// bind 改this指向 返回新的函数
log.bind({ bind: "bind" })(jack)

const code = `return a + b`
const sumFn = new Function("a", "b", code)
console.log(sumFn(1, 2))
