// log positive numbers starting at 2016, counting down by fours (excluding 0), without a FOR loop

var num = 2016
var stopNum = 1

while (num > stopNum) {
  console.log(num);
  num = num -= 4
}
