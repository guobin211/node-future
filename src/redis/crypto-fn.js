const crypto = require("crypto")
// 私钥
const mySecret = "abcdefg"
// 待加密的数据
const data = "my name is jack"
const hash = crypto.createHmac("sha256", mySecret).update(data).digest("hex")

console.log(hash)

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 4096
})

const encodeData = crypto.publicEncrypt(publicKey, Buffer.from(data)).toString("base64")
console.log(encodeData)

const decodeData = crypto.privateDecrypt(privateKey, Buffer.from(encodeData.toString("base64"), "base64"));
console.log("decode: ", decodeData.toString())

// Object.keys(crypto).forEach(key => {
//   const val = crypto[key]
//   if (typeof val === "function") {
//     console.log(val)
//   }
// })
