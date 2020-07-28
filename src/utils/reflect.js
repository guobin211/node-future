// Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API

for (const key in Object.keys(Reflect)) {
  console.log(key)
}

const person = {
  name: "jack",
  age: 22,
}

if (
  Reflect.defineProperty(person, "name", {
    configurable: true,
    enumerable: true,
    get() {
      return this.value
    },
    set(v) {
      this.value = v
    },
  })
) {
  console.log("define success", person)
  console.log(person.name)
  person.name = "tom"
  console.log(person.name)
} else {
  console.log("error")
}
