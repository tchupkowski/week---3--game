// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================

var wordChoices = ["pencil", "shoe", "happiness"];
var wins = 0;
var currentWord = ["x"];
var guessesLeft = 13;
var alreadyGuessed = [];


// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// ==================================================================================================

	function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
	}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

var random = Math.floor(Math.random() * wordChoices.length);
currentWord = wordChoices[random];
var answerArray = currentWord.split("");
console.log(currentWord);

 var hiddenArray = [""];
 for(var i = 0; i < answerArray.length; i++){
	hiddenArray[i] = "_";	
	}	
 console.log(hiddenArray);


document.onkeyup = function(event){

var letter = String.fromCharCode(event.keyCode).toLowerCase();
	//console.log(alert("you entered " + letter));

alreadyGuessed.push(letter);
guessesLeft--;

if(guessesLeft >= 0){

	for(var j = 0; j < answerArray.length; j++){
		console.log("answerArray in j for loop " + answerArray);
		
		if (letter === answerArray[j]){
			hiddenArray[j] = answerArray[j];
			console.log("new hidden array " + hiddenArray)
		}
	}

		if(arraysEqual(hiddenArray, answerArray)){
			alert("hurray"); 
			wins++;
		}

		console.log("wins = " + wins);
		console.log("hiddenArray " + hiddenArray);
		console.log("answerArray " + answerArray);
		console.log("already guessed: " + alreadyGuessed);
		console.log("Guesses Left: " + guessesLeft);
}

else (console.log("you lose"));

}