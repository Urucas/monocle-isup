monocle-isup
============

is-up module checks whether a website is up or down
<a href="https://github.com/sindresorhus/is-up">https://github.com/sindresorhus/is-up</a>

monocle-isup monoclize is-up


Install
=======

npm install --save monocle-isup

Example
=====

Instead of calling is-up asynchroniously
```javascript
var isUp = require('is-up');
isUp('sindresorhus.com', function (err, up) {
    console.log(up);
    //=> true
});
```
use monocle-isup inside your monocle project
```javscript
var monocle = require('monocle-js'),
	isUp = require("monocle-isup");

monocle.run(function*(){
	var data = yield isUp('sindresorhus.com');
	console.log(data);
	// => true
});
```



