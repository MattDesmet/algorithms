// Given array, swap first and last, third and third-tolast, etc.
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

// create var swapTargets for L and R
// iterate thru array starting at 0 index and increase i by 2 to skip odd indexes.
// set R_swapTarget to be counterpart of array[i] from the back of array using .length.
// if L target is still less than R target = swap.
// once this is no longer true, break out of iteration

// var array = [1,2,3,4,5,6] // to [6,2,4,3,5,1]
var array = [1,2,3,4,5,6,7,8,9,10]
// var array = ['a','b','c','d','e','f','g','h','h2','g2','f2','e2','d2','c2','b2','a2']

function skipSwap(array) {
  var skipTarget_L = 0
  var skipTarget_R = array.length-1
  for (var i = 0; i < array.length/2; i+=2){
    // if (array[skipTarget_L] < array[skipTarget_R]){
      temp = array[skipTarget_L]
      array[skipTarget_L] = array[skipTarget_R]
      array[skipTarget_R] = temp
      skipTarget_L +=2
      skipTarget_R = (array.length -1) - skipTarget_L
    // }
  }
  console.log(array);
}

skipSwap(array)
