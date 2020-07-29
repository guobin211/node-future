const http = require("http")

const server = http.createServer(inc => {
  inc.on("data", chunk => {
    console.log(chunk.toString())
  })
})

server.listen(9900, () => {
  console.log("http://localhost:9900")
  process.title = "my_node"
  console.log(process.title)
})
