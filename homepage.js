function addCard(id){
  var id_card = document.getElementById(id);
  var diver = document.createElement("div");
  diver.className = "card";
  diver.id = "diver";
  diver.innerHTML = "<div class=\"card\" id=\"diver\"><button class=\"btn btn-warning\" onclick=\"deleteCard('divver')\"> - </button></div><img class=\"card-img-top\" scr=\"diver.\"><div class =\"card-body\"></div>";
  id_card.appendTo('#diver');
}
function deleteCard(toDelete){
  document.getElementById(toDelete).remove();
}