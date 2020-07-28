const { person, Car } = require("./person")
console.log(person)

const car = new Car()
console.log(car)
car.run("farrari", 430)

let name = "jack"
name = name + "2019"
console.log(name)

console.time("jack")
const jack = {
  name: "jack",
}
console.timeEnd("jack")

console.time("jjack")
const jjack = JSON.parse(`{"name": "jack"}`)
console.timeEnd("jjack")

console.time("jjjack")
const jjjack = Object.create(null)
jjjack.name = "jack"
console.timeEnd("jjjack")

console.log(jjjack)

Object.keys(jjjack).forEach(key => console.log(key))
