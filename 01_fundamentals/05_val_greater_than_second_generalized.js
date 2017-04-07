// Write a function that accepts any array, and returns a new array with the array
// values that are greater than its 2nd value. Print how many values this is.
// What will you do if the array is only one element long?

var inputArray = [1,7,3,4,5,6,7,8,9,10] // test case should return a count of 3 values greater than array @ [1]

function countArray(array) {
  var newArray = [];
  var count = 0
  if (array.length < 2) {
    return -1
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[1]){
      newArray.push(i)
      count ++
    }
  }
  return newArray;
}

var results = countArray(inputArray)
console.log('The new array with values greater than the 2nd position is: ', results);
console.log('The number of elements greater than the 2nd value is: ', results.length);
