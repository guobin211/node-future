/**
 * isLikeNumber
 * @param val
 * @returns {boolean}
 */
function isLikeNumber(val) {
  return typeof val === "number" || !isNaN(parseFloat(val))
}

const data = [-1, 0, 1, "2e", "-22", "23", "e2"]
for (const datum of data) {
  console.log(isLikeNumber(datum))
}
// 去除小数部分
console.log(Math.trunc(3.1))
// 判断是正数还是负数还是零
console.log(Math.sign(-5))
// 求立方根
console.log(Math.cbrt(8))
// 将参数转换为32位无符号整数,返回前导0的个数
console.log(Math.clz32(1000))
// 对数方法
console.log(Math.expm1(1))

// 32位单精度浮点数
console.log(Math.fround(2 ** 24 - 1))

const s1 = Symbol("foo")
const s2 = Symbol("bar")
console.log(s1)
console.log(s2)
