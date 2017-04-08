// Given an array, create and return a new one containing all the values of the provided array,
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

// iterate thru array.
// check if value is already negative.  If so continue.
// if positive, set value in temp variable and subtract tempx2 from itself.

var array = [1,-3,5]

function makeNegative(array) {
  console.log(array);
  for (var i = 0; i < array.length; i++){
    if (array[i] > 0 ){
      temp = array[i]
      array[i] = array[i] - (temp*2)
    }
  }
  console.log(array);
}

makeNegative(array);
