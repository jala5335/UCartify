var child_id = 0;

function addCard(divID, link, name, img, quant, price)
{
  var unique_id = divID+child_id;
  var product = $('<div class="card" id = "'+unique_id+'"> <img   src="t"  height="300px" width="350px"><li class="list_group-item">Tweet</li><li class="list-group-item">Sample Tweet goes here!</li><button type="button" class="btn btn-danger" onclick="deleteCard('+unique_id+')">Remove</button>');
  //var tweet = $('<p> hello </p>');
  product.appendTo('#'+divID);
  child_id++;
}

function deleteCard(cardId){
  cardId.remove();
}