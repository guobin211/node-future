function Module(path) {
  this.id = ""
  this.exports = {}
  this.filename = path
  this.loaded = false
  this.parent = null
  this.children = []
}

const module = new Module("./echarts.js")
