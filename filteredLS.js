var fs = require('fs');
var path = require('path');
var filesList = undefined;
var i = 0;

function readDir(callback) {
	fs.readdir(process.argv[2], function (err, list){
		if (err) throw err;
		filesList = list;
		callback();
	});
};

function filterFiles() {
	while (filesList[i]){
		if (path.extname(filesList[i]) == "."+process.argv[3]){
			var file = filesList[i];
			console.log(file);
			i++;
		} else {
			return;
		}
	} 
}

readDir(filterFiles);

