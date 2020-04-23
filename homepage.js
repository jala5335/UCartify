var child_id = 0;

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
}

function deleteCard(cardId){
  cardId.remove();
}

