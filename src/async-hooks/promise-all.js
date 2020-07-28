const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("promise1")
  })
})

const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("promise2")
  })
})

const promiseAll = [promise1, promise2]

function getData(times) {
  Promise.all(promiseAll).then(arr => {
    console.log(`Promise.all ${times}`, arr)
  })
}

getData(1)

getData(2)
