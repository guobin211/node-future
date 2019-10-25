const { deepEqual } = require('./deepEqual')

const COMPONENT_KEY = 'Vue-Component-'
let componentIndex = 1;
const symbolKey = COMPONENT_KEY + componentIndex++;

/*
* Symbol的返回值唯一
* */
const sb1 = Symbol(symbolKey)
const sb2 = Symbol(symbolKey)
/*
* 任何值(对象或者原始值) 都可以作为一个键或一个值
* */
const map = new Map()
/*
* 键是弱引用的。其键必须是对象，而值可以是任意的
* */
const weekMap = new WeakMap()
/*
* 允许你存储任何类型的唯一值，无论是原始值或者是对象引用
* */
const set = new Set()
/*
* 将弱保持对象存储在一个集合中
* */
const weekSet = new WeakSet()
const emptyObject = Object.create(null)
const obj = {
  name: 'native-object'
}
console.log(sb1 === sb2)
console.log(sb1, sb2)

const jack = {name: 'jack'}
map.set({name: 'jack'}, 22)
weekMap.set({name: 'jack'}, 22)
set.add(jack)
set.add({name: 'jack'})

Object.defineProperties(obj, {
  'age': {
    get: function() {
      return map.get('age')
    },
    set: function(val) {
      map.set('age', val)
    }
  }
})
// undefined
console.log(obj.age)
obj.age = 22
// 22
console.log(obj.age)

weekSet.add(jack)
// false
console.log(weekSet.has({name: 'jack'}))

emptyObject.person = [jack]

emptyObject.has = function(val) {
  return this.person.includes(val)
}
// false
console.log(emptyObject.has({name: 'jack'}))
// false
console.log(jack === {name: 'jack'})
// false
console.log(jack == {name: 'jack'})
// true
console.log(deepEqual(jack, {name: 'jack'}))
