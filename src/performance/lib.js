;(function() {
  console.log("lib load")
  window.__lib = {
    app: "lib"
  }
  new Promise(resolve => {
    console.log("Promise")
    setTimeout(resolve, 50)
  }).then(() => {
    console.log("resolve")
  })
})()
