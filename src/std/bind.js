function myBindPolyfill() {
  Function.prototype.bind = function() {
    const thatFn = this
    const otherThis = arguments[0]
    const args = Array.prototype.slice.call(arguments, 1)
    return function() {
      const fnArgs = args.concat(Array.prototype.slice.call(arguments, 1))
      return thatFn.apply(otherThis, fnArgs)
    }
  }
}

function dePrint(obj) {
  console.log(this.name)
  console.log(obj)
}

const target = {
  name: "jack",
}

function testBind() {
  // bind 的第二个参数是 resFn 的参数
  const resFn = dePrint.bind(target, "tom")
  resFn("blus")
}

testBind()
