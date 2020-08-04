const toString = Object.prototype.toString

function printProps(obj) {
  for (const key in obj) {
    console.log(key, obj[key])
  }
}

const arr1 = [1,2,3]
const arr2 = new Array(5).fill(1)
const arr3 = Array.from("abcde")

console.log(arr1)
console.log(arr1 instanceof Array)
console.log(typeof arr1)
console.log(toString.call(arr1))
printProps(arr1)
console.log(arr2.__proto__)
