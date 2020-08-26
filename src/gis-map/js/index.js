// 页面完全加载,包括img
window.onload = function() {
  console.log(new Date().getTime(), "onload")
}
// 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载。
// 同步 JavaScript 会暂停 DOM 的解析
document.addEventListener("DOMContentLoaded", function() {
  console.log(new Date().getTime(), "DOMContentLoaded")
})
