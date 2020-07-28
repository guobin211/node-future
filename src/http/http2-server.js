const http2 = require("http2")
const fs = require("fs")
/**
 * http2 具有多路复用的特性，同一个tcp链接传输多个http请求，采用二进制方式传输数据
 * @type {Http2SecureServer} node server
 */
const server = http2.createSecureServer({
  key: fs.readFileSync("秘钥.pem"),
  cert: fs.readFileSync("证书.pem"),
})

function onRequest(req, res) {
  const reqPath = req.url === "/" ? "index.html" : req.url
  const file = fs.readFileSync(reqPath)
  if (!file) {
    res.statusCode = 404
    res.end()
  } else {
    res.stream.respond({ "content-type": "text/html", ":status": 200 })
    res.stream.end("<h1>Hello World!</h1>>")
  }
}

server.on("error", function(error) {
  console.error(error)
})

// server.on("stream", function(stream, headers) {
//   console.log(headers)
//   stream.respond({
//     "content-type": "text/html",
//     ":status": 200
//   })
//   stream.end("<h1>Hello World!</h1>>")
// })
//

server.on("request", onRequest)

server.listen(443, () => {
  console.log("http2 listen: https://localhost:8443")
})
