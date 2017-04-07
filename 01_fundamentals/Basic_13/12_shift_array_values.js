// given an array, move all values forward by one index, dropping the first and
// leaving a 0 value at the end.

// TEST CASE: [1,3,6,10] = [3,6,10,0]


var array = [1,3,6,10];

for (var i = 0; i < array.length; i++) {
  array[i] = array[i+1]
  }
  {
  array[array.length-1] = 0
}
console.log(array);

console.log("**************************************************");

var arr = [1,3,6,10];

function shiftArray(array) {
  for (var i = 0; i < array.length; i++)
    {
    array[i] = array[i+1]
    }

    {
      array[array.length-1] = 0
    }
  console.log(array);
}

shiftArray(arr)
