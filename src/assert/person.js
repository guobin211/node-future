/**
 * person
 *
 * @author GuoBin on 2019-07-06
 */
const person = Object.create(null)
person.name = "jack"
person.age = 22

function Car() {
  this.name = "car"
  this.run = function() {
    // arguments接收函数参数
    console.log(arguments)
    const params = Object.values(arguments)
    console.log(`${params[0]} ${this.name} is runing fast ${params[1]}`)
  }
}

module.exports = {
  person,
  Car,
}
