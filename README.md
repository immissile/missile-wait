missile-wait
============

Delay execution.


## Install

```
npm install missile-wait
```

## Usage
```javascript
var wait = require('missile-wait');

var sec = 5;
wait(sec, function() {
    console.log(sec + ' seconds after...');
    // TODO
});


// or
wait(sec);
// TODO
```
