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
  t.plan(4)

  var fn = timeout(function (err, data) {
    t.ok(err)
    t.equal(err.message, 'Operation timed out after 15 ms')
    t.equal(err.type, 'timeout')
    t.equal(err.delay, 15)
  }, 15)
  setTimeout(function () {
    fn(null, 1)
  }, 30)
})

test('timeout with custom error', function (t) {
  t.plan(4)

  var fn = timeout(function (err, data) {
    t.ok(err)
    t.equal(err.message, 'too slow, you had 15 to do the thing')
    t.equal(err.type, 'foo.timeout')
    t.equal(err.delay, 15)
  }, 15, {
    message: 'too slow, you had {delay} to do {action}',
    action: 'the thing',
    type: 'foo.timeout'
  })
  setTimeout(function () {
    fn(null, 1)
  }, 30)
})
