var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data){
    if (err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 NOT FOUND");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
}).listen(8080);


//var date = require('./UCartify/module1');
//var url = require('url');
//res.writeHead(200, {'Content-Type': 'text/html'}); //status code saying all is ok
  //var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  //res.write("The date and time are: " + date.myDateTime());
  //res.write(req.url);
  //res.end(txt);