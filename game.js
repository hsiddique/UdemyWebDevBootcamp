// create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check if guess is right
if(guess === secretNumber){
	alert("Well done, you have d guessed correctly!");
}

//check if higher
else if (guess> secretNumber){
	alert("Too High");
}

//otherwise check if lower
else{
	alert("Too Low");

}


