//07_transform

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

function transform () {
	return baseArray.map(function(index) {
    	return function () {
//    		console.log(index);
    		return index;
    	}
  	})
}
 
//newArray[3]();
//newArray[4]();