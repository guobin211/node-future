function testDateNumber() {
  console.log(Number)
  console.log(Date)
  console.log(Math)
}

testDateNumber()
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.EPSILON)
console.log(Number.NEGATIVE_INFINITY)
console.log(Date.now())
console.log(Date.parse('2019-11-11'))
console.log(Date.UTC(2019, 11, 11))
const now = new Date()
console.log(now)
console.log(now.toDateString())
console.log(now.toLocaleDateString())
console.log(now.toISOString())
// 格林尼治标准时间 (GMT)
// 协调世界时 (UTC) 北京时间 = UTC + 8
console.log(now.toUTCString())
console.log(now.getMonth())
// 欧拉常数，自然对数的底数, 约等于 2.718
console.log(Math.E)
// 2的自然对数, 约等于 0.693
console.log(Math.LN2)
// 10的自然对数, 约等于 2.303
console.log(Math.LN10)
// 以2为底E的对数, 约等于 1.443
console.log(Math.LOG2E)
// 以10为底E的对数, 约等于 0.434
console.log(Math.LOG10E)
console.log(Math.PI)
// 1/2 的平方根
console.log(Math.SQRT1_2)
// 2的平方根
console.log(Math.SQRT2)
console.log(Math.pow(2, 3))
console.log(2 ** 3)
console.log(Math.round(4.4))
console.log(Math.ceil(4.4))
// 平方根
console.log(Math.sqrt(9))
// 取整
console.log(Math.trunc(123.321))
// 返回小于 x 的最大整数
console.log(Math.floor(4.4))
// 立方根
console.log(Math.cbrt(27))