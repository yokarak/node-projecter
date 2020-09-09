var http = require('http');
var date = require('./myfirstmodule');
var url = require('url');

http.createServer(function (reg, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var q = url.parse(reg.url, true).query;
    var txt = q.year + " " +q.month;
    res.write("The date and time :" + date.myDateTime());
    res.end(txt);

}).listen(8080);