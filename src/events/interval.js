let interval;

const animate = (fn) => {
  clearInterval(interval)
  setInterval(fn, 1000)
}

function tap() {
  console.log(1)
}

