var obj = {
  "2": 3,
  "3": 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
}

// {
//   '2': 1,
//   '3': 2,
//   length: 4,
//   splice: [Function: splice],
//   push: [Function: push]
// }
// obj[obj.length] = 1, obj.length++
obj.push(1)
obj.push(2)
console.log(obj)

// 作用域
var a = { n: 1 }
var b = a
a.x = a = { n: 2 }
// undefined
// { n: 2 }
console.log(a.x)
console.log(b.x)
