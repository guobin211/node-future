function newFn(fn, ...args) {
  const obj = Object.create(fn.prototype)
  const res = fn.apply(obj, args)
  return res instanceof Object ? res : obj
}

function Person(name) {
  this.name = name
}

Person.prototype.say = function() {
  console.log("hello " + this.name)
}

const p1 = new Person("jack")
const p2 = newFn(Person, "jack")
p1.say()
p2.say()
