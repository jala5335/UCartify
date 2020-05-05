var mysql = require('mysql');

function verifyLogin() {
  var enteredUser = document.getElementById("username");
  var enteredPass = document.getElementById("password");

  //get Data from database
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "ucartifydatabase"
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT username, password FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log("Pulled data!");
      for(i=0; i<result.length; i++){
        if(result[i].username == enteredUser && result[i].password == enteredPass){ //Check database query vs entered
          logMeIn();
        }
      }
      //If no match found
      alert("User Not Found");
    });
  });
}

function logMeIn() {
  document.location.href = "homepage.html";
}
