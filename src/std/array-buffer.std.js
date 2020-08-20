const buff1 = new ArrayBuffer(16)
// ArrayBuffer只能通过DataView进行修改
const view1 = new DataView(buff1)

view1.setInt8(1, 12)

console.log(view1.getInt8(1))

const _int8Array = new Int8Array(buff1)
console.log(_int8Array)

console.log(buff1.__proto__)
