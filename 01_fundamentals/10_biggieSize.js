// Given an array, write a function that changes all positive numbers in the array to “big”.
//
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function makeItBig(array) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0){
      // array[i] = 'Big'
      array[i] = 'This index is a positive number'
    }
  }
  console.log(array);
  return array
}

makeItBig([-1,3,5,-5])
