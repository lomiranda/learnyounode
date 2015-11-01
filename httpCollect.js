var http = require('http');
var str = '';
var strCnt = 0;

http.get(process.argv[2], function callback (res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		str = str+data;
	}).on('end', function(end){
		strCnt = str.length;
		console.log(strCnt);
		console.log(str);
	});
});
