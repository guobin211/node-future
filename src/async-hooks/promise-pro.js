///
/// Promise/A+
///
let _state = "pending"
let _value = undefined
let _reason = undefined
const onFulfilledFunc = []
const onRejectedFunc = []

class PromisePro {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("Promise constructor's argument is not a function")
    }

    console.log(executor)
    try {
      executor(this._resolve, this._reject)
    } catch (e) {
      console.error(e)
    }
  }

  then(onFulfilled) {
    if (_state === "resolved") {
      if (typeof onFulfilled === "function") {
        // 保存回调
        onFulfilled(_value)
      }
    }
  }

  _resolve(value) {
    if (_state === "pending") {
      _value = value
      onFulfilledFunc.forEach(fn => fn(value))
      _state = "resolved"
    }
  }

  _reject(reason) {
    if (_state === "pending") {
      _reason = reason
      onRejectedFunc.forEach(fn => fn(reason))
      _state = "rejected"
    }
  }
}

module.exports = {
  PromisePro: PromisePro,
}
