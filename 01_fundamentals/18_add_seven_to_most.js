// Build function that accepts array. Return a new array with all values except first, adding 7 to each.
// Do not alter the original array.

// TEST CASE: [1,2,3,4] = [9,10,11]

var array = [1,2,3,4]

function changeArray(array) {
  changedArray = []
  for (var i = 1; i < array.length; i++) {
    changedArray.push(array[i]+7);
  }
  console.log(array);
  console.log(changedArray);
  return changedArray;
}

changeArray(array)
