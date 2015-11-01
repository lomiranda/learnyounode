var http = require('http');
var url = require('url');
var date = new Date();

function parseTime (now){
	return {
		hour: now.getHours(),
		minute: now.getMinutes(),
		second: now.getSeconds()
	};
};

function unixTime(now){
	return { unixtime : now.getTime()};
	parseTime(now);
};

function jsonServer(){
	var server = http.createServer(function (request, res){
		var time = url.parse(request.url, true);
		date = new Date(time.query.iso);
		var response;
		if (/^\/api\/parsetime*/.test(request.url)) response = parseTime(date);
		if (/^\/api\/unixtime*/.test(request.url)) response = unixTime(date);
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(response));
	});
	server.listen(process.argv[2]);	
}

jsonServer(unixTime(date));
