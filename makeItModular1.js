var fs = require('fs');
var path = require('path');
var i = 0;
var array = new Array();

module.exports = function readDir(dir, filter, callback) {
        fs.readdir(dir, function (err, list){
                if (err) 
		  return callback(err);
        	while (list[i]){
                	if (path.extname(list[i]) == "." + filter){
                        	array.push(list[i]);
	                        i++;
        	        } else {
				callback(null, array);
				return;
			}
		}	
	})
}
