console.log(String.prototype)

const str = "jack"
const stro = new String("jack")
// false
console.log(str === stro)
let strref = stro
// true
console.log(strref === stro)
strref += ""
// false
console.log(strref === stro)
console.log(str.charAt(0))
console.log(str[0])
// 由指定的UTF-16代码单元序列创建的字符串
console.log(String.fromCharCode(65, 66, 67))
console.log(String.fromCharCode(0x2014))
console.log(String.fromCharCode(0x12014))
// 指定的代码点序列创建的字符串
console.log(String.fromCodePoint(42))
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804))
