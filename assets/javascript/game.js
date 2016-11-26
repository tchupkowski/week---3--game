// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================

var wordChoices = ["pencil", "shoe", "happiness"];
var wins = 0;
var currentWord = ["x"];
var guessesLeft = 10;
var alreadyGuessed = [""];

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// ==================================================================================================


// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

var random = Math.floor(Math.random() * wordChoices.length);
currentWord = wordChoices[random];
currentWord.split("");

for(var i = 0; i < currentWord.length; i++){
	console.log(currentWord[i])
}


document.onkeyup = function(event){

var letter = String.fromCharCode(event.KeyCode).toLowerCase();
}