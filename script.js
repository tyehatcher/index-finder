var userInput = prompt("What is your name?");

function getFirstLetter(word){
  return word.charAt(0).toLowerCase();
}

function getIndexOfLetter(Letter){
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  for(var i=0; i<alphabet.length; i++){
    if(Letter==alphabet[i]){
        document.querySelector(".stuff").innerHTML= i;
        }
  }
}

getIndexOfLetter(getFirstLetter(userInput));