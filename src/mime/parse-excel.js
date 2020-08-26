const fs = require("fs")
const excel = "/Users/guobin/Downloads/test.xlsx"
const csv = "/Users/guobin/Downloads/test.csv"

const file = fs.readFileSync(excel)
console.log(file.toString("utf8", 0, 8))
