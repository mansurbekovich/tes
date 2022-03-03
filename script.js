
var input = document.getElementById("input");
var key = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm12345678"

function generator(){
  var randomKey = "";
  for(i=0; i<9; i++){
    randomKey = randomKey + key.charAt(Math.floor(Math.random()*key.length))
  };
  input.value = randomKey;
}
function copy(){
  input.select();
  document.execCommand("copy");
}
