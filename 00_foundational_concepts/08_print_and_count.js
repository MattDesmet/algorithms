// print all integers in multiples of 5 from 12 to 96.  At the end print the total count of multiples.

var num = 12
var end = 21
var count = 0

while (num <= end) {
  if (num % 5 == 0) {
    console.log(num);
    num += 1;
    count ++
    console.log('The total number of multiples is: ', count);
  }else{
    num++;
  }
}
