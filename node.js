var http = require('http');
var date = require('./module1');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //status code saying all is ok
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  //res.write("The date and time are: " + date.myDateTime());
  //res.write(req.url);
  res.end(txt);
}).listen(8080);