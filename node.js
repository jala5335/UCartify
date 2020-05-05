const http = require('http');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
//const store = require('./store');

//Connect to mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678"
});

//Begin connection
  con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");

  const app = express();
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(express.urlencoded())

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
    //if (err) throw err;
    //console.log("User added - username: user1, password: user1!");
  //});

  //Insert product into products table
  //var product_sql = "insert into products (name, url, price, user_id) VALUES ('shoe','url',80,1)";
  //con.query(product_sql, function (err, result) {
    //if (err) throw err;
    //console.log("Product added");
  //});

  //Display products
  var display_products_sql = "SELECT * FROM products";
  con.query(display_products_sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  var username = 'error';
  var password = 'error';

  app.post('/signup', function (req, res){
    email = req.body.email;
    password = req.body.password
    console.log(email, password)
    var insert_new_user_sql = "INSERT INTO users (username, password) VALUES ('" + email + "', '" + password + "')";
      con.query(insert_new_user_sql, function (err, result) {
      if (err) throw err;
      console.log("New user added!");
    });
    res.redirect('/')
  });

  app.post('/login', function (req, res){
    email = req.body.username;
    password = req.body.password
    console.log(email, password)
    var check_database = "SELECT * FROM users WHERE username = '" + email + "' AND password = '" + password +"' LIMIT 1";
    con.query(check_database, async function (err, result) {
      if (err) throw err;
    });
    //TODO: Check if they are in the DB
    var string = encodeURIComponent(email);
    res.redirect('/accountinfo?valid=' + string);
  });

 //Retrieve user info
  var display_users_sql = "SELECT username FROM users WHERE user_id = '1' LIMIT 1";
  con.query(display_users_sql, function (err, result, fields) {
    if (err) throw err;
    app.put('/SignUp.html', function (req, res) {
      res.send({success: true, message: result})
    });
 });
//Add users in signup


app.get('/signup', function (req, res){
  res.sendFile(__dirname + '/SignUp.html');
});
app.get('/', function (req, res){
  res.sendFile(__dirname + '/UCartify.html');
});
app.get('/accountinfo', function (req, res){
  res.sendFile(__dirname + '/accountinfo.html')
});
app.get('/login', function (req, res){
  res.sendFile(__dirname + '/AccountInfo.html');
});

app.get('/accountinfo', function (req, res){
  var user = "SELECT username FROM users WHERE username = '" + username + "' LIMIT 1";
  //var pass = "SELECT username "
});

app.listen(8080, () => console.log("App listening on port http://localhost:8080"))

});
