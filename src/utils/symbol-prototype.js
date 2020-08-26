const data = {
  name: "ajax",
  rating: 99,
  // 前置操作符 "number", "default"
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.rating
    } else {
      return this.name
    }
  },
  [Symbol.toStringTag]() {
    return "[object data]"
  },
  [Symbol.iterator]: function*() {
    yield this.name
    yield this.rating
  },
  [Symbol.toString]() {
    return `{name: ${this.name}, rating: ${this.rating}`
  },
}

console.log(data)
console.log(+data)
console.log(data + "")
console.log(Object.prototype.toString.call(data))
for (const val of data) {
  console.log("of", val)
}
