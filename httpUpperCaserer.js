var http = require('http');
var map = require('through2-map');
var out;

function upperCase(){
	var server = http.createServer(function (request, res) {
		request.pipe(map(function (chunk) {
			return chunk.toString().split('').join('').toUpperCase();
		})).pipe(res);
	});
	server.listen(process.argv[2]);
};

upperCase();
