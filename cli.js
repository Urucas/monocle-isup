#!/usr/bin/env node
'use strict'
var monocle = require('monocle-js'),
	isUp = require("./index.js"),
	argv = process.argv.slice(2),
	input = argv[0];

monocle.run(function*(){
	var data = yield isUp(input);
	console.log(data);
});

