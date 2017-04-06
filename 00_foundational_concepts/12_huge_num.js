// add the odd integers from -10,000 to 10,000.  log the final sum.  Is there a shortcut

var negative = -10
var positive = 10
sum = 0

for (var i = negative; i <= positive ; i++) {
  if (i % 2 ===0) {
    continue;
  }else {
    sum = sum += i
  }
  console.log('The final sum of codeblock 1 is: ', sum);
}

// the shortcut would be to have a conditional that totals 'negative' and 'positive' in the beginning and return 0 if they are equal to each other.

console.log("**************************************************");

var negative2 = -10
var positive2 = 10
sum = 0

for (var j = negative2; j <= positive2 ; j++) {
  if (positive2 + negative2 == 0 ) {
    console.log('The numbers are the same and the sum is ZERO');
    break
  }
  else if (j % 2 ===0) {
    continue;
  }else {
    sum = sum += j
  }
  console.log('The final sum of codeblock 2 is: ', sum);
}
console.log("**************************************************");

var negative3 = -10
var positive3 = 10
sum = 0

for (var j = negative3; j <= positive3 ; j++) {
  if (positive3 + negative3 == 0 ) {
    console.log('The numbers are the same and the sum is ZERO');
    break
  }
  else if (j % 2 ===0) {
    continue;
  }else {
    sum = sum += j
  }
}
console.log('The final sum of codeblock 3 is: ', sum);
