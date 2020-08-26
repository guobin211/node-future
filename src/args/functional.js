function functional(condition) {
  const res = {
    _status: false,
    match: (code, callback) => {
      if (code === condition && !res._status) {
        callback()
        res._status = true
      }
      return res
    },
    other: callback => {
      if (!res._status) {
        callback()
      }
    },
  }
  return res
}

functional(3)
  .match(1, () => {
    console.log("2")
  })
  .match(2, () => {
    console.log("2")
  })
  .other(() => {
    console.log("other")
  })

class Target {
  constructor(condition) {
    this.condition = condition
    this.matched = false
  }

  match(code, callback) {
    if (!this.matched && this.condition === code) {
      this.matched = true
      callback()
    }
    return this
  }

  other(callback) {
    callback()
  }
}
