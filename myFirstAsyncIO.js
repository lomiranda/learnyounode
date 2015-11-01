var fs = require('fs');

var text = undefined;


function readFile(callback) {
	fs.readFile(process.argv[2], 'utf8', function (err, data) {
		if (err) throw err;
		text = data;
		callback();
	});
};

function printConsole() {
	var linesArray = text.split('\n');
	var newLines = linesArray.length -1;
	console.log(newLines);
}

readFile(printConsole);
