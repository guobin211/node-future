/*
 * 运行时编译
 * */
const reg1 = new RegExp("ab+c")
/*
 * 推荐写法
 * */
const reg2 = /ab+c/

console.log(reg1.test("abcabcd"))
const str = "abccabcc"
console.log(str.match(reg1))

const reg3 = /^(<)[a-z]*\s/
const html = `<div class="active"></div>`
console.log(html.match(reg3))
