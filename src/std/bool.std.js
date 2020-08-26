const isSuccess = true
const isOK1 = Boolean(-1)
const isOK2 = Boolean(0)
const isOK3 = Boolean(1)
const isOK4 = Boolean(undefined)
const isOK5 = Boolean(null)
const isOK6 = Boolean(function() {})
const isOK7 = Boolean({})

console.log(isOK1, isOK2, isOK3, isOK4, isOK5, isOK6, isOK7)
