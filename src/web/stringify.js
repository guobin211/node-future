const toString = Object.prototype.toString
const data1 = "0xd800"
// JSON数据必须是utf-8编码
const data2 = {
  a: "\u{d834}",
  b: "\ud834",
}
// unicode分为utf-8和utf-16编码
// utf-8编码的string分为 1，2，3，4byte
// utf-16编码的string分为2，4byte
console.log(JSON.stringify(data1))

for (const [key, val] of Object.entries(data2)) {
  console.log(key, JSON.stringify(val))
}
// 从unicode码点返回字符 fromCharCode不能识别大于0xffff的码点
console.log(String.fromCharCode(0x20bb7))
console.log(String.fromCodePoint(0x20bb7))
// 在javascript内部，字符以utf-16存储，每个字符2个字节，对于超过范围的字符使用2个字符存一个数据
const name = "𠮷"
console.log(typeof name)
console.log(toString.call(name))
// 2
console.log(name.length)
console.log(JSON.stringify(name.charAt(0)))
console.log(JSON.stringify(name.charAt(1)))
console.log(name.charCodeAt(0))
console.log(name.charCodeAt(1))
