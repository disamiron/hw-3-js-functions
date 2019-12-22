//02_convertHashIntoArray

function convertHashIntoArray (hash) {

	var mainArray = new Array();

	for (var key in hash) {
	    var unitArray = new Array();
	    unitArray.push(key, hash[key]);
	    mainArray.push(unitArray);
	}
//	console.log(mainArray);
	  return mainArray;
	  
}

//	var a = {name: 'Jeremy', age: 24, role: 'Software Engineer'}; 
//	convertHashIntoArray(a);