const empty = Object.create(null)

empty.name = "empty"

const notify = (target, name, data) => {
  console.log(`${target.name}.${name} has changed ${data}`)
}

const proxyHandler = {
  get: function(target, name) {
    return name in target ? target[name] : "no key"
  },

  set: function(target, name, value) {
    if (name === "name") {
      console.error("cant set name prop")
      return
    }
    target[name] = value
    notify(target, name, value)
  },
}

// const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// let _id = 0
// for (const key of keys) {
//   empty[`em-${(_id++)}`] = `${key}`
// }
//
// console.log(empty)

const reactive = new Proxy(empty, proxyHandler)

reactive.age = 11

reactive.name = "jack"

console.log(reactive.age)

console.log(reactive.name)
