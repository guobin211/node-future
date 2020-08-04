function myApplyPolyfill() {
  Function.prototype.apply = function(otherThis, args) {
    otherThis.__fn = this
    const res = otherThis.__fn(...args)
    delete otherThis.__fn
    return res
  }
}
