'use strict'

var assertEqual = require('assert-equal')
var partial = require('ap').partial
var once = require('once')

module.exports = timeout

function timeout (callback, delay, message) {
  assertEqual(typeof callback, 'function')
  assertEqual(typeof delay, 'number')

  callback = once(callback)
  setTimeout(partial(callback, new Error(message || 'timed out')), delay)
  return callback
}
