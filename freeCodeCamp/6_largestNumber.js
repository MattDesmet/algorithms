// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// [5,27,39,1001]

// traverse the array.
// traverse thru each sub-array.  Use sub-array.length
// compare each value to a max value.
// push max value at the end of each traversal


function largestOfFour(array) {
  var max = 0;
  resultsArray = [];
  for (var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++){
      if (array[i][j] > max) {
        max = array[i][j];
      }
    }
    resultsArray.push(max);
    max = 0;
  }
  return resultsArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) //should return [27,5,39,1001]
