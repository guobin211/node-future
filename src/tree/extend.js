function BaseObject() {
  this.size = 0
  this.name = 'BaseObject'
}

BaseObject.prototype.run = function() {
  console.log(arguments.callee)
  console.log(`runing ${this.size}`)
}

function SubObject() {
  this.size = 10
  this.name = 'SubObject'
}

/**
 * 继承 BaseObject
 * @type {BaseObject}
 */
SubObject.prototype = BaseObject.prototype
new BaseObject().run()
console.log(new BaseObject().size)
console.log(new SubObject().size)
new SubObject().run()
Object.prototype.extend = function(father) {
  for (const props in father) {
    console.log(props)
    this[props] = father[props]
  }
  return this
}
const base = new BaseObject()
const obj = { name: 'sub', age: 22 }
const sub = obj.extend(base)
console.log(sub === obj)
console.log(sub)
