function numberToBinary(n) {
  return Number(n).toString(2)
}

function binaryToNumber(s) {
  return parseInt(s, 2)
}

let a = 10
let b = '20'

console.log(numberToBinary(a))
console.log(numberToBinary(b))

// 二进制比特位操作
// 按位与（ AND） 对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0
const d = a & b
// 按位或（OR）
const e = a | b
// 按位异或（XOR）
const f = a ^ b
// 按位非（NOT） 反转操作数的比特位，即0变成1，1变成0
const g = ~a
// 左移（Left shift）
const h = a << b
// 右移动
const i = a >> b
// 无符号右移
const j = a >>> b

// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)
// console.log(j)

let x = 1
// 对它的每个操作数求值（从左到右, 并返回最后一个操作数的值
x = (x++, x)
console.log(x)

const condition1 = true,
  condition2 = false,
  condition3 = false

const func1 = function() {
  if (condition1) {
    return 'value1'
  } else if (condition2) {
    return 'value2'
  } else if (condition3) {
    return 'value3'
  } else {
    return 'value4'
  }
}
/*条件三元运算符*/
const func2 = function() {
  return condition1
    ? 'value1'
    : condition2
    ? 'value2'
    : condition3
    ? 'value3'
    : 'value4'
}
