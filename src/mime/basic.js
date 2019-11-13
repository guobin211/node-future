// 基本对象

function testBasicObject() {
  console.log(Object)
  console.log(Function)
  console.log(Boolean)
  console.log(Symbol)
  console.log(Error)
  //  eval 函数的错误
  console.log(EvalError)
  // 一个值不在其所允许的范围或者集合中
  console.log(RangeError)
  // 一个不存在的变量被引用时发生的错误
  console.log(ReferenceError)
  // 尝试解析语法上不合法的代码的错误
  console.log(SyntaxError)
  // 类型
  console.log(TypeError)
  console.log(URIError)
}

testBasicObject()
// true
console.log(Object.constructor === Function)
console.log(function() {}.constructor === Function)

const sum = new Function('a', 'b', 'return a + b')
console.log(sum(1, 2))

const jack = {
  name: 'jack',
  age: 22
}

for (const [key, val] of Object.entries(jack)) {
  console.log(key, val)
}
