//Player 1 Code
var randomNumber1 = generateRandom(6);
console.log("Player 1 dice : " + randomNumber1);

var diceImage1 = "images/dice"+randomNumber1+".png";
console.log("Dice 1 img directory : " + diceImage1);
document.querySelector("#dicePlayer1").setAttribute("src", diceImage1);

//Player 2 Code
var randomNumber2 = generateRandom(6);
console.log("Player 2 dice : " + randomNumber2);

var diceImage2 = "images/dice"+randomNumber2+".png";
console.log("Dice 2 img directory : " + diceImage2);
document.querySelector("#dicePlayer2").setAttribute("src", diceImage2);

//Randomize number function
function generateRandom(maxNumber)
{
    return Math.floor(Math.random() * maxNumber) +1 ;
}