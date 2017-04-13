function insertAtIndex(num, y){
  var array = [1,2,3,4];
  array.push(0)
  for (var i = array.length-1; i>y; i--) {
    array[i] = array[i-1]
  }
  array[y] = num
  console.log(array);
}

insertAtIndex(100,2)
