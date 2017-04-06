// print integers from 0 - 25.  Print each integers and the running sum so far.

// expected output: i is currently: [25] and the current sum is: [100]

var sum = 0

for (var i = 0; i < 26; i++) {
  sum = sum += i;
  console.log('[i] is currently: ', i, 'and the running sum is: ', sum );
}

console.log("**************************************************");

var startNum = 0
var endNum =100
var sum = 0

for (var i = startNum; i <= endNum; i++) {
  sum = sum += i;
  console.log('[i] is currently: ', i, 'and the running sum is: ', sum );
}
