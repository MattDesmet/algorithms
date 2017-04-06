// Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = 'matt';

console.log('this is myNumber', myNumber);
console.log('this is myName', myName);

console.log("**************************************************");

var temp = myName;
var myName = myNumber;

console.log('this is temp', temp);
console.log('this is myNumber', myNumber);
console.log('this is myName', myName);

console.log("**************************************************");

var myNumber = temp;

console.log('this is temp', temp);
console.log('this is myNumber', myNumber);
console.log('this is myName', myName);
