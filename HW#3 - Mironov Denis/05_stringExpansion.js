//05_stringExpansion

function stringExpansion (string) {
	
	var result = "";

	for (var i = 0; i < string.length; i++) {
		if (isNaN(string[i])) {
			if (!isNaN(string[i-1])) {
				for (var j = 0; j < string[i-1]; j++) {
					result += string[i];
				}
			} else {
				result += string[i];
			}
		}
	}

//	console.log(result);
	return result;
}

//stringExpansion('3D2a5d2f');
//stringExpansion('3d332f2a')
//stringExpansion('abcde')
//stringExpansion('')