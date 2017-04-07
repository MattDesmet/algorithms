// Given an array, return the sum of the first value in the array, plus the array’s length.
// What happens if the array’s first value is not a number, but a string (like "what?") or
// a boolean (like false).

// if the 1st val is a string it concatenates the string and int length.  Result = string4

var array = ['string',4,6,8] // answer should be 2 + 4 = 6

function sumAndLength(arr) {
  sum = arr[0] + arr.length
  console.log(sum);
}

sumAndLength(array)
Test = sumAndLength(array)
getType = typeof Test
console.log(getType);
console.log(typeof Test);

if (typeof Test === 'number') {
  console.log('This is a number');
}else {
  console.log('This is NOT a number');
}

if (typeof Test === "string") {
  console.log('This IS a string');
}else {
  console.log('This is NOT a string');
}
