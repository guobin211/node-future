const a1 = 123
const a2 = Number("123")
// [Number: 123]
const a3 = new Number("123")
const a4 = parseInt("123", 10)
// true
console.log(a3 instanceof Number)
// false
console.log(a2 instanceof Number)
console.log(a3)
