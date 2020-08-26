var b = 10

;(function b() {
  // eslint-disable-next-line no-func-assign
  b = 20
  // [Function: b]
  console.log(b)
})()
;(function() {
  console.log(b)
  b = 20
  console.log(b)
})()

var a = {
  i: 1,
  toString() {
    return a.i++
  },
}

if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}

a = [1, 2, 3]
a.join = a.shift
if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}

a = {
  i: 1,
  [Symbol.toPrimitive]: () => {
    return a.i++
  },
}

if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}

a = {
  i: 1,
  valueOf() {
    return a.i++
  },
}
