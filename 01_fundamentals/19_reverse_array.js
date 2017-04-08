// Given array, write a function that reverses values, in-place.
//
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

// create (2) variables:  start & end
// set value of variables to be 0 index and array.length-1.
// ASSUMING an EVEN array length.
// FOR loop thru array.
// IF start value is < end value
// grab 0 index position and assign to temp
// grab last element item
// assign value of 0 idx to be value of last.
// assign value of last item to be value of temp
// increment start variable.
// decrement end variable.

var array = [3,1,6,8,4,2]

function reverseArray(array) {
  var start = 0
  var countStart = array[start];
  var end = array.length-1;
  var countEnd = array[end]
  for (var i = 0; i < array.length; i++){
    if (start < end  ){
      temp = array[start];
      array[start] = array[end];
      array[end] = temp
      start++
      end--
    }
  }
  console.log(array);
  return array;
}

reverseArray(array)
