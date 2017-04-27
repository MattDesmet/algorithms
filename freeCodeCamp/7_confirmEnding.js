// given a string and a target ending string, check if given string ends with the exact match
// of the supplied target string.

// inputs = (str,x)
// output = boolean

// test cases:
// true: ('dog', 'g')
// true: ('','')
// false: ('dog', 'G')

// take in the aurguments
// traverse backwards comparing last char by last char
// as soon as there is not a match, return false
// else, return true

// function confirmEnding(str, target) {
//   var count = target.length
//   var str_walker = str.length-1;
//   console.log(str_walker);
//   var target_walker = target.length-1;
//   console.log(target_walker);
//   console.log(str.charAt(str_walker));
//   console.log(target.charAt(target_walker));
//   while (count > 0)
//   if (str.charAt(str_walker) === target.charAt(target_walker) ) {
//     count--
//   }
//   console.log(str);
//   return str;
// }
//
// confirmEnding("Bastian", "n");
// confirmEnding("Matt", 'x');


function confirmRecursively(str, target) {
  var count = target.length;
  var str_walker = str.length-1;
  var target_walker = target.length-1;
  if (str.charAt(str_walker) !== target.charAt(target_walker) )
  console.log('no match');
  else if (str.charAt(str_walker) !== target.charAt(target_walker)) {
  console.log('its a match');
  }
}

confirmRecursively('teststring', 'g')
