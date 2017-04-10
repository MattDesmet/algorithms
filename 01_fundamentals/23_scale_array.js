// Given an array arr and a number num, multiply all
// values in arr by num, and return the changed array arr.

var array = [1,2,3,4,5,6,7,8,9,10]

function scaleArray(array,num) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i]*num
  }
  console.log(array);
  console.log(num);
  return array
}

scaleArray(array, 2)
