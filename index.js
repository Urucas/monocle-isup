'use strict'

var monocle = require('monocle-js'), 
		o_O = monocle.o_O, 
		o_C = monocle.o_C,
		isUp = require('is-up');

var monoclizedIsUp = o_O(function*(uri) {
 	var cb = o_C();
  isUp(uri, cb);
 	return (yield cb);
});

module.exports = monoclizedIsUp;
