// Insert value into a given location into a given array.

// take in array, num, pos
// open up space for new item at the end of the array
// shift all values to the right of target position
// insert new value in target position

var arr = [1,2,3,4];

function insertAtIndex(arr, num, pos){
  arr[arr.length] = null
  for (var i = arr.length-1; i>pos; i--) {
    arr[i] = arr[i-1]
  }
  arr[pos] = num
  console.log(arr);
}

insertAtIndex(arr,100,2)
