//03_toCamelCase

function toCamelCase (string) {

	var separator;
		if (string.indexOf("-") !== -1) {
		separator = "-";
		} else {
		separator = "_";
		}

	var intoWords = string.split(separator);

	var result = "";

	var mergeWords = intoWords.map(function (word) {
		var upperCaseWord = word[0].toUpperCase() + word.slice(1);
	    result += upperCaseWord;
	})
  
//	console.log (result)
	return result;

}

//	toCamelCase("the-stealth-warrior");
//	toCamelCase("The_Stealth_Warrior");