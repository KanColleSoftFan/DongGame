var express = require('express');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var edge = require('edge');
var Promise = require('bluebird');
var app = express();

var sharpFunc = edge.func('../../DongEngine/DongEngine/bin/Debug/DongEngine.dll');

var doStuff = async(function () {
	var sharpPromise = Promise.promisify(sharpFunc);
	return await(sharpPromise({ hi: 1, test: 2 }));
});

app.get('/', async(function (req, res) {
	var result = await(doStuff());
	res.send({ result: result });
}));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
