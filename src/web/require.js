window.__loader__ = {}

function require(path) {
  const loadModule = window.__loader__
  if (loadModule["echarts"]) {
    return loadModule["echarts"]
  }
  loadScript(path, () => {
    window.__loader__["echarts"] = window["echarts"]
  })

  function loadScript(url, callback) {
    const script = document.createElement("script")
    script.src = url
    script.crossOrigin = "Anonymous"
    document.body.appendChild(script)
    script.onload = () => {
      callback && callback()
    }
  }
}
