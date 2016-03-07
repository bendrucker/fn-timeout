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

#### `timeout(callback, delay, [message])` -> `function`

Returns the original `callback`

##### callback

*Required*  
Type: `function`

The callback to time out.

##### delay

*Required*  
Type: `number`

A time limit in milliseconds.

##### message

Type: `string`  
Default: `"timed out"`

##### options

###### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Ben Drucker](http://bendrucker.me)
