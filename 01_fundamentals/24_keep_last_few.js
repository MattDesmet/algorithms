// Stan learned something today: that reducing an array’s .length immediately shortens it by that amount.
 // Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter)
 // . Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

var array = [1,2,3,4,5,6,7,8,9,10]
var num = 4

function trimArray(array, num) {
  var swapRight = (array.length)-num
  for (var i = 0; i < num+1; i++) {
    array[i] = array[swapRight]
    swapRight++
  }
  array.length = num
  console.log(array);
}

trimArray(array, num)
