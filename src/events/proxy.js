let data = {
  name: 'jack',
  age: 11,
}

const PROXY = Object.create(null)
PROXY.get = (target, prop) => {
  return target[prop]
}
PROXY.set = (target, prop, value) => {
  target[prop] = value
  notify(value)
}

function makeReactive(obj) {
  return new Proxy(obj, PROXY)
}

function notify(params) {
  console.log(params)
}

data = makeReactive(data)

data.age = 22
