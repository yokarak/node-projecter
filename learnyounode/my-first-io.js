var fs = require("fs");

var contents = fs.readFileSync(process.argv[2], 'utf-8').split('\n').length-1
var lines = contents.toString()
console.log(lines) 