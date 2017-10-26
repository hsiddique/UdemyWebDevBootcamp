 function isEven(num){
 	if (num % 2 ===0) {
 		return true;
 	}
 	else{
 		return false;
 	}
 }


function factorial(num){
	val = 0
	for (var i = num; i = 1; i--) {
		sum = val * num * i;
		console.log(val);
	}
	return val;
}

function kebabToSnake(value){
  var i = 0, length = value.length;  
  for(i;i<length;i++){
    value = value.replace("-","_");
  }
  return value;
}