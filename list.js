var toDo = ["first item"];

//ask user for input
var input = prompt("What would you like to do?");

while(input!== "quit"){
	if (input === "new") {
		
		newToDo();
	}
	else if (input === "list"){
		listTodos();

	} 
	else if(input === "delete"){
		deleteToDo();


	};
	input = prompt("What would you like to do?");
}
console.log("ok, you quit teh app");


function listTodos(){
		//console.log(toDo);
		console.log("**********")
		toDo.forEach(function(t, i){
			console.log(i + ": " + t);
		});
		console.log("**********")
	};

function newToDo(){
		var newtoDo = prompt("Add to do");
		toDo.push(newtoDo);
		console.log("added todo");

};

function deleteToDo(){
		var toDelete = prompt("Which index do you want to delete?");
		toDo.splice(toDelete, 1);
		console.log("Deleted to do")
}