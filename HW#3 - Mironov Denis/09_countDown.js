//09_countDown

function countDown (number) {
  
	var i = 1;
	var copyNumber = number;

	while (copyNumber >= 0) {
	setTimeout(function (copyNumber) {console.log(copyNumber);}, 1000 * i, copyNumber--);
	i++;
	}

}

countDown(9);