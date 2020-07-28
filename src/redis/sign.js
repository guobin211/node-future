const crypto = require("crypto")

const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
  namedCurve: "sect239k1"
})

const sign = crypto.createSign("SHA256")
sign.write("要生成签名的数据")
sign.end()
const signature = sign.sign(privateKey, "hex")
console.log(signature)

const verify = crypto.createVerify("SHA256")
verify.write("要生成签名的数据")
verify.end()
console.log(verify.verify(publicKey, signature, "hex"))
