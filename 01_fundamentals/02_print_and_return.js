// Your function will receive an array with two numbers. Print the first value, and return the second.

var printArr = function printArrary(arr) {
  array = arr;
  console.log(array[0]);
  return array[1];
}

var results = printArr([0,1])

console.log(results);

var string_results = printArr(['this is the first array position', 'this is the 2nd position'])

console.log(string_results);

printArr(['called without variable.  Should only print this array position', 'should not by default print position 1'])
