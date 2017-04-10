// You are passed an array containing strings. Working within that same array, replace each string with
// a number – the length of the string at previous array index – and return the array.

// Test Case: ['string', 'ball', 'bat', 'small', 'red', 'baseball'] = [0,6,4,3,5,3]

// set index 0 to be 0
// iterate thru array with for loop.  start at position 1
// set index position to be equal to length of string at array[i]-1
// return array

var array = ['string', 'ball', 'bat', 'small', 'red', 'baseball']

function replaceString(array) {
  // array[0] = 0
  for (var i = 1; i < array.length-1; i++) {
    var str = array[i-1];
    console.log('This is the value of str: ',str);
    var size = str.length;
    console.log('This is the value of Size: ',size);
    array[i] = size
  }
  console.log(array);
  return array
}

replaceString(array)
