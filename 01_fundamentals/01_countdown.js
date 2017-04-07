// Create a function that accepts a number as an input. Return a new array that counts down by one,
// from the number (as array’s ‘zero’th element) down to 0 (as the last element). How long is this array?

// TEST: var num = 10; EPECTED OUTPUT = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

var returnSample = function countdown(num) {
  var arr = [];
  var y = num
  for (var i = y; i > -1; i--){
    arr.push(i);
  }
  return arr;
}

var results = returnSample(10) // returns the value of arr at the actual array object
console.log(results);
console.log('The length of the array is: ', results.length);
