'use strict'

var test = require('tape')
var timeout = require('./')

test('success', function (t) {
  t.plan(1)

  var fn = timeout(function (err, data) {
    if (err) return t.end(err)
    t.equal(data, 1)
  }, 15)
  fn(null, 1)
})

test('timeout', function (t) {
  t.plan(2)

  var fn = timeout(function (err, data) {
    t.ok(err)
    t.equal(err.message, 'too slow')
  }, 15, 'too slow')
  setTimeout(function () {
    fn(null, 1)
  }, 30)
})
