var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

var con = mysql.createConnection({  
  host: "localhost",
  user: "root",
  password: "12345678"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");

  //Create database
  con.query("CREATE DATABASE IF NOT EXISTS ucartifydatabase", function (err, result){
    if (err) throw err;
    console.log ("Database created!");
  });
  con.query("USE ucartifydatabase", function (err, result){
    if (err) throw err;
    console.log ("Database used!");
  });

  //Create users table 
  var users_sql = "CREATE TABLE  IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(45), password VARCHAR(45))";
  con.query(users_sql, function (err, result) {
    if (err) throw err;
    console.log("Users table created!");
  });

  //Create products table
  var products_sql = "CREATE TABLE IF NOT EXISTS products (product_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(45) NOT NULL, url VARCHAR(45) NOT NULL, price DECIMAL(6) NOT NULL, user_id INT, FOREIGN KEY (user_id) REFERENCES users(user_id))";
  con.query(products_sql, function (err, result) {
    if (err) throw err;
    console.log("Products table created!");
  });

  //Insert user into users table
  //var user_sql = "INSERT INTO users (username, password) VALUES ('user1','user1')";
  //con.query(user_sql, function (err, result) {
  //  if (err) throw err;
  //  console.log("User added - username: user1, password: user1!");
  //});

  //Display users 
  var display_users_sql = "SELECT * FROM users";
  con.query(display_users_sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  //Insert product into products table
  //var product_sql = "insert into products (name, url, price, user_id) VALUES ('shoe','url',80,1)";
  //con.query(product_sql, function (err, result) {
  //  if (err) throw err;
  //  console.log("Product added");
  //});

  //Display products 
  var display_products_sql = "SELECT * FROM products";
  con.query(display_products_sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

});

//Create server
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
