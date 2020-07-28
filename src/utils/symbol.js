const SINGLE_TON_KEY = Symbol("SingleTon")

class SingleTon {
  constructor(name) {
    this._name = name
  }

  play() {
    console.log(`i an ${this._name} playing...`)
  }
}
// 确保单例对象存在
if (!global[SINGLE_TON_KEY]) {
  global[SINGLE_TON_KEY] = new SingleTon("jack")
}

module.exports = global[SINGLE_TON_KEY]
