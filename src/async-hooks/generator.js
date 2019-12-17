function MyData() {
  this._data = []
  this._sise = 0
}

MyData.prototype.add = function(value) {
  if (value) {
    this._data.push(value)
    this._sise++
  }
}

MyData.prototype.reset = function() {
  this._data = []
  this._sise = 0
}

MyData.prototype.size = function() {
  return this._sise + 1
}

MyData.prototype.first = function() {
  return this._data[0]
}

MyData.prototype[Symbol.iterator] = function*() {
  for (let i = 0; i < this._sise; i++) {
    yield this._data[i]
  }
}

const data = new MyData()
for (let i = 0; i < 5; i++) {
  data.add(i)
}

console.log(data.size())

for (const value of data) {
  console.log(value)
}
