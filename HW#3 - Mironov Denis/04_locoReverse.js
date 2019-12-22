//04_locoReverse

function locoReverse(text) {

	var intoWords = text.split(" ");

	var reverseWords = intoWords.map(function (word) {
		var reverseWord = word.split("").reverse().join("");
		return reverseWord;
		})

//	console.log(reverseWords.join(" "));
	return reverseWords.join(" ");
}

//locoReverse(" A fun little challenge! ");