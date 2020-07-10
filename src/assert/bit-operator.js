// 10 的二进制
// 有符号32位整数
// 00000000000000000000000000001010
const a = 10

function testAnd() {
  // 按位与（ AND）	a & b	对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。
  console.log(a & 0)
  // console.log(a)
  console.log(a.toString(2))
}

testAnd()

function testOr() {
  // 按位或（OR）	a | b	对于每一个比特位，当两个操作数相应的比特位至少有一个1时，结果为1，否则为0。
  console.log(a | 0)
  console.log("testOr: ", a)
}

testOr()

function testXOR() {
  // 按位异或（XOR）	a ^ b	对于每一个比特位，当两个操作数相应的比特位有且只有一个1时，结果为1，否则为0。
  console.log(a ^ 11)
  console.log("testXOR: ", a)
}

testXOR()

function testNot() {
  // 按位非（NOT）	~ a	反转操作数的比特位，即0变成1，1变成0。
  console.log(~a)
}

testNot()

function leftShift() {
  // 左移（Left shift）	a << b	将 a 的二进制形式向左移 b (< 32) 比特位，右边用0填充。
  console.log(a << 3)
}

leftShift()

function rightShiftUint() {
  // 无符号右移	a >>> b	将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位，并使用 0 在左侧填充。
  console.log(a >>> 3)
}

rightShiftUint()

console.log(a)
