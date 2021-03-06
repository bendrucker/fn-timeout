# fn-timeout [![Build Status](https://travis-ci.org/bendrucker/fn-timeout.svg?branch=master)](https://travis-ci.org/bendrucker/fn-timeout)

> Wrap an async function to time out after a specified interval


## Install

```
$ npm install --save fn-timeout
```


## Usage

```js
var timeout = require('fn-timeout')

var fn = timeout(function (err, data) {
  //=> receives an err if not called within a second  
}, 1000)
```

## API

#### `timeout(callback, delay, [error])` -> `function`

Returns the original `callback`

##### callback

*Required*  
Type: `function`

The callback to time out.

##### delay

*Required*  
Type: `number`

A time limit in milliseconds.

##### error

Type: `object`  
Default: `{message: 'Operation timed out after {delay} ms'}`

An object with error. The following template values can be used in your custom message:

* delay: the specified delay for the timeout

You can also add additional values of your own. They will be appended to the `err` object and available for templating in the message.


## License

MIT © [Ben Drucker](http://bendrucker.me)
