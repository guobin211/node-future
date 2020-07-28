const args = ["a", "b", "c", "d"]

/*生成function的参数*/
function buildFnBody(params) {
  let res = "return "
  res += params.reduce((pre, cur) => `${pre} + ${cur}`, 0)
  params.push(res)
  return params
}

/*最后一个参数为方法体*/
const sum = new Function(...buildFnBody(args))
console.time("sumcode")
console.log(sum(1, 2, 3, 4))
console.timeEnd("sumcode")

function sumNative(a, b, c, d) {
  return a + b + c + d
}
console.time("sumNative")
console.log(sumNative(1, 2, 3, 4))
console.timeEnd("sumNative")

function reduceSum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0)
}
console.time("reduceSum")
console.log(reduceSum(1, 2, 3, 4))
console.timeEnd("reduceSum")

const code = ["a", "return a + 2"]

function getAge(a) {
  console.log(a)
}

const getName = new Function(...code)

console.log(getName(22))

console.log(getName)

getAge(18)
