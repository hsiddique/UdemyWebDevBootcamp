function printReverse(arr){
	for (var i = arr.length -1; i >= 0;i--) {
		console.log(arr[i]);
	};
};

printReverse([3,6,2,5])

function isUniform(arr){
	var firstItem = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== firstItem) {
			return false;
		}
	}
	return true
};

isUniform([1,1,1,1,1,1]);

function sumArray(values){
	var sum = 0;
	values.forEach(function(val){
		sum = sum + val;
	});
	return sum;
}


sumArray([1,2,3,4,5,6,7,8,9,10]);

function maxi(maxValues){
	var MaxNum = maxValues[0];
	maxValues.forEach(function(mv){
		if (mv > MaxNum) {
			MaxNum = mv;
		}

	});
	return MaxNum;

}