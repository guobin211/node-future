let timeKey = 0

module.exports = exports = {
  funcTime: (func, params, callback) => {
    timeKey++
    if (typeof func === 'function') {
      const label = func.name + timeKey + ''
      console.time(label)
      func(
        params ? params : null,
        callback ? (...data) => callback(data) : () => {}
      )
      console.timeEnd(label)
    } else {
      console.error(`funcTime(func, params, callback ): func must be function`)
    }
  },
}
