var child_id = 0;
const mysql = require('mysql');
var con = mysql.createConnection({  
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "ucartifydatabase"
});

//Begin connection
  con.connect(function(err){
    if (err) throw err;
    con.query("SELECT name, url, price, itemq FROM products", function(err,result,fields){
    	if(err)throw err;
    	console.log(result);
    })
 })

function printconsole(ilink, iname, iquant, iprice, add){
		var ilinkn = document.getElementById("ilink").value;
		var inamen = document.getElementById("iname").value;
		var iquantn = document.getElementById("iquant").value;
		var ipricen = document.getElementById("iprice").value;
		console.log(ilinkn);
		console.log(inamen);
		console.log(iquantn);
		console.log(ipricen);
		var text = "";
		text += "link:" + ilinkn + "<br>";
		text += "product:" + inamen + "<br>";
		text += "quantity:" + iquantn + "<br>";
		text += "price:" + ipricen + "<br>";
		document.getElementById("addhere").innerHTML = text;
}

function scanform(form, divID) {
  var x = document.getElementById(form);
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById(divID).innerHTML = text;
}

function addCard(divID, form, link, name, img, quant, price)
{
  var unique_id = divID+child_id;
  var finfo = scanform(form, divID);
  var product = $('<div class="card" id = "'+unique_id+'"> <img   src="t"  height="300px" width="350px"><li class="list_group-item">Tweet</li><li class="list-group-item">Sample Tweet goes here!</li><button type="button" class="btn btn-danger" onclick="deleteCard('+unique_id+')">Remove</button>');
  //var tweet = $('<p> hello </p>');
  product.appendTo('#'+divID);
  child_id++;
  // var node = document.createElement("LI");                 // Create a <li> node
  // var textnode = document.createTextNode("Water");         // Create a text node
  // node.appendChild(textnode);                              // Append the text to <li>
  // document.getElementById("myList").appendChild(node);
}

function deleteCard(cardId){
  cardId.remove();
}

function createListing(){
	document.getElementById("addhere").innerHTML = "<div class="container"> </div> "
}


