//01_splitAndMerge

function splitAndMerge(string, separator) {

	var intoWords = string.split(" ");

	var mergeWords = intoWords.map(function (word) {
	    var splitWord = word.split("");
	    return splitWord.join(separator);
	})
  
//	console.log(mergeWords.join(" "));
	return mergeWords.join(" ");
};

//	splitAndMerge("My name is John"," ")
//	splitAndMerge("Hello World!",",")