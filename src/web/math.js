function testPow() {
  console.time('pow')
  for (let i = 0; i < 100000; i++) {
    // console.log(Math.pow(1000.0, 2))
    console.log(1000.0 * 1000.0)
  }
  console.timeEnd('pow')
}

testPow()
