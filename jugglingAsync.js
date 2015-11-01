var http = require('http');
var str = '';
var str2 = '';
var str3 = '';

function url1(){
	(http.get(process.argv[2], function callback (res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		str = str+data;
	}).on('end', function(end){
		strCnt = str.length;
		url2();
	});
}))
};

function url2(url1){
(http.get(process.argv[3], function callback (res2) {
        res2.setEncoding('utf8');
        res2.on('data', function(data2) {
                str2 = str2+data2;
        }).on('end', function(end){
                url3();
        });
}))};

function url3(){
(http.get(process.argv[4], function callback (res3) {
        res3.setEncoding('utf8');
        res3.on('data', function(data3) {
                str3 = str3+data3;
        }).on('end', function(end){
		console.log(str);
		console.log(str2);
		console.log(str3);
        });
}))};

url1();
