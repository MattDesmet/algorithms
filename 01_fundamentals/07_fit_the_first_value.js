// Your function should accept an array. If the value at [0] is greater than array’s length, print "Too big!";
// if the value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

var array = [3,2,3,4,5,6,7,8,9,10]

function valueAtZero(array) {
  if (array[0] > array.length) {
    console.log('Too Big!');
  }
  else if (array[0] < array.length) {
    console.log('Too Small');
  }
  else {
    console.log('Just Right!');
  }
}

valueAtZero(array)
