// var answer = prompt("Are we there yet?");

// while(answer !== "Yes" && answer !=="yeah"){
// 	answer = prompt("Are we there yet?");
// }

// alert("We made it!!");

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1){
	answer = prompt("Are we there yet?");
}

alert("We made it!!");