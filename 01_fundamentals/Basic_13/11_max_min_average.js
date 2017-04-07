// given an array, print the max, min and average values for that array.

var array = [1,3,6,10,99,86,87,1001]

var min = array[0];
var max = array[0];
var sum = 0;

for (var i = 0; i < array.length; i++) {
  sum = sum += array[i];

  if (array[i] < min){
    min = array[i];

  }
  if (array[i] > max) {
    max = array[i];
  }
}
average = sum / array.length;
console.log('Sum is: ', sum);
console.log('Array length is: ',array.length);
console.log('Average is: ', average);

console.log('Min is: ', min, ' and max is: ', max, ' average is: ', average);
