function myCallPolyfill() {
  Function.prototype.call = function(otherThis, ...args) {
    otherThis.fn = this
    const res = otherThis.fn(...args)
    delete otherThis.fn
    return res
  }
}

const jack = {
  name: "jack"
}

function dePrint(obj) {
  console.log(this.name)
  console.log(obj)
}

dePrint.call(jack, "tom", "mary")
