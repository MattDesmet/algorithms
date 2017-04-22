// put string into an array
// reverse array
// put array to string
// return string


// building and testing
function reverseString_long(str) {
  // var arr = []
  // arr.push(str.split(''))
  var splitstring = str.split('')
  var arr = splitstring.reverse()
  var x = arr.join('')

  // console.log(arr);
  console.log(str);
  console.log(splitstring);
  console.log(x);
  return x;
}

// refactored
function reverseString(str) {
  var splitstring = str.split('')
  var arr = splitstring.reverse()
  var x = arr.join('')
  return x;
}


// best practice

reverseString("hello");
