var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var text = buffer.toString();

var linesArray = text.split('\n');

var newLines = linesArray.length -1;

console.log(newLines);
