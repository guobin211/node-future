/**
 * promise
 *
 * @author GuoBin on 2019-07-16
 */

module.export = class PromisePro {

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('Promise constructor\'s argument is not a function');
    }
    
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e)
    }
  }

  resolve(value) {
    
  }

  reject(value) {

  }

};
