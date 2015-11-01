var net = require('net');
var date = new Date();

function getDate(){
	var year = date.getFullYear();
	var month = (date.getMonth() + 1);
	var day = date.getDate();
	var hour = (date.getHours()+':'+date.getMinutes());
	if(month <= 9) month = '0' + month;
	if(day <= 9) day = '0' + day;
	var now = (year + '-' + month + '-' + day + ' ' + hour);
	var server = net.createServer(function (socket) {
		socket.end(now+'\n');
	});
	server.listen(process.argv[2]);
}
getDate();
