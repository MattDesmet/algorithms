//
// Count Positives
//
// Given array of numbers, create function to replace last value with number of positive values.
//
// Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

var array = [-1,1,1,1]

function countOdds(array) {
  var count = 0
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0){
      count ++
    }
    array[array.length-1] = count
  }
  console.log(array);
  return array;
}

result = countOdds(array)
