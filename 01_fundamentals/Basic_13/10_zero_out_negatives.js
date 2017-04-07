// return the given array after reseting any negative values to 0

var array = [1,3,6,-10,99,-86,87,-1001]

for (var i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    array[i] = 0
  }
}

console.log(array);
