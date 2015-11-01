var http = require('http');
var fs = require('fs');

function ftpServer(){
	var server = http.createServer(function (request, res) {
		var text = (fs.createReadStream(process.argv[3], {encoding: 'utf8'}));
		text.on('data', function(data){
 			res.end(data+'\n');
		});
	});
	server.listen(process.argv[2]);
};

ftpServer();
