/*
* Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法
* */
Reflect.metadata = {
  'name': 'metadata'
}

console.log(Reflect)

/*
* 输出: 1 2 3 4
* */
function nativeLog(...args) {
  console.log(...args)
}

const num = [1, 2, 3, 4]

/*
* 3种函数调用的方式
* */
nativeLog(...num)
nativeLog.apply(null, num)
Reflect.apply(nativeLog, null, num)

let receive;
receive = Reflect.get(num, 0)
// 1
console.log(receive)
