;(function() {
  const lib = window.__lib
  let anima, count = 0
  console.log(lib)

  window.onload = function(ev) {
    console.log("onload", ev)
    const tbody = document.querySelector(".tbody")
    for (let i = 0; i < 1000; i++) {
      const tr = document.createElement("tr")
      const td1 = document.createElement("td")
      td1.textContent = `${i + 1}`
      const td2 = document.createElement("td")
      td2.textContent = "jack"
      const td3 = document.createElement("td")
      td3.textContent = "22"
      const td4 = document.createElement("td")
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      const frag = document.createDocumentFragment()
      frag.appendChild(tr)
      window.requestAnimationFrame(() => {
        tbody.append(tr)
      })
    }
  }

  function animaFn() {
    console.log("requestAnimationFrame")
    if (count < 10) {
      anima = window.requestAnimationFrame(animaFn)
      count++
    } else {
      window.cancelAnimationFrame(anima)
    }

  }
  animaFn()

  window.addEventListener("scroll", function(ev) {
    window.requestAnimationFrame(() => scrollHandle(ev))
  })

  function scrollHandle(ev) {
    console.log(ev)
  }
})()
