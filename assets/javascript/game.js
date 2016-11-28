// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================

var wordChoices = ["doom", "superman", "daredevil", "ironman", "spiderman", "batman", "thor", "wolverine", "flash", "hulk"];
var wins = 0;
var currentWord = ["x"];
var guessesLeft = 13;
var alreadyGuessed = [];
// var random = Math.floor(Math.random() * wordChoices.length);
// 		currentWord = wordChoices[random];
// 		var answerArray = currentWord.split("");
//console.log("answer is " + currentWord);
var hiddenArray = [""];

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

	// var hiddenArrayPrint = function(){

	// 	for(var i=0; i < hiddenArray.length; i++){

	// 	document.getElementById("word").innerHTML += (hiddenArray[i] + " ");
	// 	//document.write("test" + hiddenArray[i]);
	// 	//$("word").appendTo(hiddenArray[i]);
	// 	console.log("hidden array is"+ hiddenArray);
	// 	}
	// }


	

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================
 

var newGame = function(){	

	guessesLeft = 13;
	alreadyGuessed = [];
	hiddenArray = [];

	var random = Math.floor(Math.random() * wordChoices.length);
	currentWord = wordChoices[random];
	var answerArray = currentWord.split("");
	console.log("answer is " + currentWord);

	for(var i = 0; i < answerArray.length; i++){
		hiddenArray[i] = "_";	
	}	

	document.getElementById("word").innerHTML = hiddenArray.join(" ");
	//hiddenArrayPrint();

	document.getElementById("guessesLeft").innerHTML =("Remaining Guesses: " + guessesLeft);

	document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: "

	document.getElementById("wins").innerHTML = ("Wins: " + wins);


	document.onkeyup = function(event){

		var letter = String.fromCharCode(event.keyCode).toLowerCase();
			//console.log(alert("you entered " + letter));

		
		document.getElementById("guessesLeft").innerHTML =("Remaining Guesses: " + guessesLeft);

		alreadyGuessed.push(letter);
		document.getElementById("lettersGuessed").innerHTML = ("Letters Guessed: " + alreadyGuessed.join(" "));

		if(guessesLeft >= 0){

			for(var j = 0; j < answerArray.length; j++){
				console.log("answerArray in j for loop " + answerArray);
				
				if (letter === answerArray[j]){
					hiddenArray[j] = answerArray[j];
					document.getElementById("word").innerHTML = hiddenArray.join(" ");
					//hiddenArrayPrint();
				}

			}

			if(arraysEqual(hiddenArray, answerArray)){
				document.getElementById("word").innerHTML = hiddenArray.join(" ");
				wins++;
				alert("hurray"); 
				newGame();
			}

			document.getElementById("wins").innerHTML = ("Wins: " + wins);
				console.log("wins = " + wins);
				console.log("hiddenArray " + hiddenArray);
				console.log("answerArray " + answerArray);
				console.log("already guessed: " + alreadyGuessed);
				console.log("Guesses Left: " + guessesLeft);

			guessesLeft--;
		}

		if (guessesLeft <= -1){
			alert("you lose")
			newGame();
		}

	}
}

newGame();