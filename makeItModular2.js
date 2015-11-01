var module = require('./makeItModular1.js');
var i = 0;

module(process.argv[2], process.argv[3], function(err, list){
	while (list[i]){
		console.log(list[i]);
		i++;
	}
});
