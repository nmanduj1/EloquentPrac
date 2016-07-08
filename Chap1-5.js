function gettingaRange(start1, end2, stepValue) {
  var arrayOfIntegers = [];
  for (i = start1; i <= end2; i=i+stepValue) {
  	arrayOfIntegers.push(i);
  }  
  alert(arrayOfIntegers);
}

function summationed(arrayofNumbers) {
    var addedUp = 0;
    for (i=0; i <= arrayofNumbers.length-1; i++) {
    addedUp = addedUp + arrayofNumbers[i];
    }
  alert(addedUp);
}

function reverseArray(array2BReversed){
  var newArray = [];
  for (i=0; i<=array2BReversed.length-1; i++){
    newArray.unshift(array2BReversed[i]);
  }
  alert(newArray);
}

function reverseArrayInPlace(array2BReversed){
	alert(array2BReversed.reverse());
}
