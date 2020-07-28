const HASH_CODE = 31

function hashCode(str) {
  let char = 0
  for (let i = 0; i < str.length; i++) {
    char += char * HASH_CODE + str.charCodeAt(i)
  }
  return char
}

const name = "jack"
const res = hashCode(name)
console.log(res)

const b = Buffer.from("hello")
const s = b.toString("base64")
console.log(s)

const rb = Buffer.from(s, "base64")
console.log(rb.toString())
