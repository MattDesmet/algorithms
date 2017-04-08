// Create a function that takes array of numbers. The
// function should print the lowest value in the array, and return the highest value in the array.

var array = [10,2,3,1,50,6,7,89,9,10] // min is 1 :: max is 89

function lowhigh(array) {
  min = array[0]
  max = array[0]
  for (var i = 0; i < array.length; i++) {
    if(array[i] < min){
      min = array[i]
    }
    if(array[i] > max){
      max = array[i]
    }
  }
  console.log(min);
  return max
}

lowhigh(array)
result = lowhigh(array)
console.log(result);
