function testGlobalValue() {
  console.log(Infinity)
  console.log(NaN)
  console.log(undefined)
  console.log(null)
  console.log(global)
  console.log(this)
}

testGlobalValue()
// NaN
console.log(Number("n"))
// Infinity
console.log(10 / 0)
// 判断
console.log(Number.isNaN(10))
console.log(Number.isFinite(10 / 0))
console.log(eval(2 + 3))
// 解码一个西里尔字母（Cyrillic）URL
console.log(
  decodeURI(
    "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
  )
)
console.log(decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"))
