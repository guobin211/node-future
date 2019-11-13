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
