const data = {
  1: 222,
  2: 123,
  5: 888
}

console.log(data[1])

const res = new Array(12).fill(null)
res.forEach((el, index) => {
  if (data[index + 1]) {
    res[index] = data[index + 1];
  }
})

console.log(res)
