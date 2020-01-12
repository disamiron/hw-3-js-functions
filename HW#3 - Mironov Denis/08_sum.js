//08_sum

function sum() {

	var args = [];

	for (var i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	if (args.length === 0) {
		return 0;
	} else if (args.length === 1){
		return args.pop();
	} else {
		return args.pop() + sum.apply(null, args);
	}
}

sum(1,3,5,7); 
//console.log(sum(1,3,5,7));