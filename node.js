var http = require('http');

var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('Ucartify.html', function(err, data){
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