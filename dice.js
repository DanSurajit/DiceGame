var maxNumberOfDices = 6;
var randomNumber1 = Math.floor((Math.random() * maxNumberOfDices) + 1);
var randomNumber2 = Math.floor((Math.random() * maxNumberOfDices) + 1);
var selectorImage = document.querySelectorAll("img");


function randomImage() {
  var loadRandomImage = selectorImage[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
  var loadRandomImage = selectorImage[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
  return loadRandomImage;
}

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<img class='flagImage' src='images/flag.png'>Player 1 Wins";
}else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins<img class='flagImage' src='images/flag.png'>";
}else {
  document.querySelector("h1").innerHTML = "Draw";
}

window.onload = randomImage;


// var str = "dice1.png";
// var strToNumber = str.match(/(\d+)/);
//
// console.log(strToNumber[0]);
