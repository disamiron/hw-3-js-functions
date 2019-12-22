//06_largest_smallest

function largest() {
	var large = Math.max.apply(null, arguments);
//	console.log(large);
	return large;
}

function smallest() {
	var small =  Math.min.apply(null, arguments);
//	console.log(small);
	return small;
}

//largest(2, 0.1, -5, 100, 3) 
//smallest(2, 0.1, -5, 100, 3)