const { PromisePro } = require("./promise-pro")

async function getData() {
  return new Promise((resolve, reject) => {
    for (const item of [1, 2, 3, 4, 5]) {
      console.log(item)
      resolve(item)
    }
  })
}

// getData().then(res => console.log(res));

console.log(PromisePro)

const prom = new PromisePro((resolve, reject) => {
  for (const item of [1, 2, 3, 4, 5]) {
    console.log(item)
    if (item === 3) {
      resolve(item)
    }
  }
})

prom.then(res => console.log(res))
