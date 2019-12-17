'use strict'

const toString = Object.prototype.toString
const types = {
  '[object Boolean]': 'bool',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Object]': 'object',
  '[object Array]': 'array',
  '[object Function]': 'function',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
}

module.exports = class Tools {
  static getTag(obj) {
    if (obj == null) {
      return obj === undefined ? '[object Undefined]' : '[object Null]'
    }
    return toString.call(obj)
  }

  /**
   * object 属性
   * @param obj
   * @returns {string[]}
   */
  static getAttributes(obj) {
    console.log(typeof obj)
    console.log(obj.__proto__)
    return Object.keys(obj)
  }

  /**
   * 原生对象判断
   * @param obj params
   * @returns {boolean}
   */
  static isPlainObject(obj) {
    if (Tools.getTag(obj) !== '[object Object]') {
      return false
    }
    if (Object.getPrototypeOf(obj) === null) {
      return true
    }
    let proto = obj
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(obj) === proto
  }
}
