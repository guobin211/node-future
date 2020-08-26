function initProcessErrorHandler() {
  const events = [
    "uncaughtException",
    "unhandledRejection",
    "rejectionHandled",
    "beforeExit",
    "disconnect",
    "exit",
    "warning",
    "message",
    "multipleResolves",
  ]

  process.on("uncaughtException", function(error) {
    logError(error, "uncaughtException")
  })

  process.on("unhandledRejection", function(error) {
    logError(error, "unhandledRejection")
  })

  function logError(error, type) {
    console.error(`logError: ${type}`)
    console.error(error.stack)
  }
}

function initWindowErrorHandler() {
  window.onunhandledrejection = function(error) {
    console.log("onunhandledrejection", error.stack)
    error.preventDefault()
  }
  window.onerror = function(message, source, line, column, error) {
    console.log("window.error", message)
    console.log("source: ", source)
    console.log("line: ", line)
    console.log("column: ", column)
    console.log("error", error)
    message.preventDefault()
  }
}
