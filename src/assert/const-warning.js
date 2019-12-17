function test(person) {
  person.age = 26
  /*
  * person.age = 26
  * var obj = {
      name: 'hzj',
      age: 18
    }
  * person = obj
  * */
  person = {
    name: 'hzj',
    age: 18,
  }
  return person
}

const p1 = {
  name: 'fyq',
  age: 19,
}
const data = null
const p2 = test(p1)
console.log(p1)
console.log(p2)
