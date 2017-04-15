//

// var array = [3,6,10,99,86,87,2,1001,1,6,3,6,9]
var array = [2,12,1,9]
// var array = [9,8,14,2,7,1,4] //6
// var array = [5,10,1,9,7,12] // 8
// var array = [17,21,15,12,15,18,16,18,13] // should be
// var array = [10,1,4,1,9,8,4,10,2] // should be 8

var low = array[0]
var lowIndex = 0
var high = array[0]
var highIndex = 0

for (var i = 0; i < array.length; i++) {
  if (array[i] < low) {
    low = array[i]
    lowIndex = i
  }
  if (array[i] > high) {
    high = array[i]
    highIndex = i
  }
  if (lowIndex < highIndex)
    highestDifference = high - low;
  }

console.log('The lowest price is: ', low, 'on Day: ', lowIndex);
console.log('The hightest price is: ', high, 'on Day: ', highIndex);
console.log('The biggest gain is: ', highestDifference);
