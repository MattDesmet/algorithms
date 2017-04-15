// given an array of numeric values, a min/max value for a range
// remove any values in the array that are between the min/max range
// return the original array.  solve in place.

var array = [1,2,3,4,5,6]
var min = 2
var max = 5
var size = array.length-1
var nullCount = 0

function removeWithinRange(arr,min,max) {
  for (var i = 0; i < size; i++){
    if (array[i] > min && array[i] < max ){
      array[i] = null;        // should result in [1,2,null,null,5,6]
      console.log(array);
    }
  }
  for (var j = 0; j < array.length-1; j++) {
    console.log('Array within J loop BEFORE: ',array);
    if(array[j] === null){
      array[j] = array[j+1]       // results in [1,2,5,6,null,null]
      array[j+1] = null
      nullCount++
      console.log('Array within J loop AFTER: ',array);
      console.log('This is value of nullCount: ',nullCount);
    }
  }
  array.length = array.length-nullCount
  console.log(array);
  return array
}

removeWithinRange(array, min, max)


function multiply(a, b){
 var result =  a * b
 Return result
}
