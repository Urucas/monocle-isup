#!/usr/bin/env node
'use strict'
var monocle = require('monocle-js'),
	isUp = require("monocle-isup");

monocle.run(function*(){
	var data = yield isUp("urucas.com");
	if(data) {
		console.log("is up");
	}else {
		console.log("is down");
	}
});

