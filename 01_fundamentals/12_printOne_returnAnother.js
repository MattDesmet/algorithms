// Build a function that takes array of numbers. The function should print second-to-last
// value in the array, and return first odd value in the array.

var array = [2,2,3,4,5,6,7,8,8,10]

function returnOdd(array) {
  var toPrint = array[0]
  var firstOdd = array[0]
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0){
      firstOdd = array[i];
      break
    }
  }
  toPrint = array[array.length -2]
  console.log(toPrint);
  return firstOdd
}

results = returnOdd(array)
console.log(results);
console.log("**************************************************");
console.log(returnOdd(array));
