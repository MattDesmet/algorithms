// given an arran and a value Y, count and print the number of array values greater than Y

var array = [1,3,6,10,99,86,87,1001]  // should be (4) values greater than Y
var y = 20
var count = 0

for (var i = 0; i < array.length; i++) {
  if (array[i] > y) {
    count++
  }
}

console.log(count);
