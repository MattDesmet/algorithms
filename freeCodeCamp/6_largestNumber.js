// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// [5,27,39,1001]

// traverse the array.
// traverse thru each sub-array.  Use sub-array.length
// compare each value to a max value.
// push max value at the end of each traversal


function largestOfFour(array) {
  // var max = 0
  resultsArray = []
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    for(var j = 0; j < array[i].length; j++){
      console.log(`This is inside the J loop  *** array[i] *** :${ array[i] }`);
      var max = array[i][0]
      console.log(`value of max  *** "max" *** :${ max }`);
      if (array[j] > max) {
        max = array[j];
        resultsArray.push(max)
      }
    }
  }
  console.log(resultsArray);
  return resultsArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
