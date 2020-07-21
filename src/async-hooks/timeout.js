function pipeLog1() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

function pipeLog2() {
  for (var i = 0; i < 10; i++) {
    setTimeout((j) => {
      console.log(j)
    }, 1000, i)
  }
}

function pipeLog3() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

function pipeLog4() {
  for (var i = 0; i < 10; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j)
      }, 1000)
    })(i)
  }
}

pipeLog1()
pipeLog2()
pipeLog3()
pipeLog4()
