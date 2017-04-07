// analyze a given array's values and print the average

// var array = [1,2,3,4,5,6,7,8,9,10]
var array = [1,2,3]
var sum = 0

for (var i = 0; i < array.length; i++) {
  sum = sum += array[i]
}
console.log('This is the average: ', sum/array.length);
