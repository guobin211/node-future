const Tools = require("./tools")

const date = new Date()
// Date
const type = date.__proto__.constructor.name
console.log(type)
// object
console.log(typeof date)
// function
console.log(typeof date.__proto__.constructor)
console.log(Tools.isPlainObject(date))

console.log(process.env)
