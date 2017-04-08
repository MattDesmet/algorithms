// Given array, create a function to return a new array where each value in
// the original has been doubled. Calling double([1,2,3])
// should return [2,4,6] without changing original.

var array = [1,2,3]

function doubleValues(array) {
  newArr = []
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i]*2)
  }
  console.log('This is the value of original array: ',array);
  return newArr
}

result = doubleValues(array)
console.log(result);
