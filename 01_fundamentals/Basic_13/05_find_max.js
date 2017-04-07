// given an array, find and print its max value

var array = [1,3,6,10,99,86,87,1001]
var max = 0

for (var i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i]
  }
}
console.log('The max value in the array is: ', max);
