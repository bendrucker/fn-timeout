'use strict'

var assertEqual = require('assert-equal')
var partial = require('ap').partial
var once = require('once')
var TypedError = require('error/typed')
var extend = require('xtend')

module.exports = timeout

var TimeoutError = TypedError({
  type: 'timeout',
  message: 'Operation timed out after {delay} ms',
  delay: null
})

function timeout (callback, delay, data) {
  assertEqual(typeof callback, 'function')
  assertEqual(typeof delay, 'number')

  callback = once(callback)
  setTimeout(partial(callback, TimeoutError(extend({
    delay: delay
  }, data))), delay)
  return callback
}
