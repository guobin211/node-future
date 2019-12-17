/**
 * 函数class
 * @constructor
 */
function Car() {
  this.name = 'Car'
}

Object.defineProperty(Car.prototype, 'run', {
  value: function(spead) {
    console.log(`${this.name} run with ${spead}`)
  },
  enumerable: false,
  configurable: true,
  writable: true,
})
new Car().run(90)
Object.defineProperties(Car, {
  createTime: {
    writable: false,
    value: new Date(),
  },
})
console.log(new Car())

/**
 * class 构造函数类
 */
class MiniCar {
  constructor() {
    this.name = 'MiniCar'
  }

  run(spead) {
    console.log(`${this.name} run with ${spead}`)
  }
}

new MiniCar().run(50)

/**
 * 装饰对象创建时间
 * @param target class
 * @returns {*}
 * @constructor
 */
function CreateTime(target) {
  target.createTime = new Date().toDateString()
  return target
}

/**
 * 装饰属性、方法为只读
 * @param target
 * @param name
 * @param descriptor
 * @returns {*}
 * @constructor
 */
function ReadonlyProp(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}
