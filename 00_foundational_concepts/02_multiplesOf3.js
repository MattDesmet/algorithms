// use FOR loop to log multiples of 3 from -21 to 0.  Do NOT print -3 or -6

var startNum = -21
var stopNum = 0
var incrementor = 3
var skipNums = [-3, -6]

for (var i = -21; i <= 0; i+=3) {
  if (i == -3 || i == -6) {
    console.log(i);
  }
}

console.log("**************************************************");

for (var i = startNum; i <= stopNum; i+=incrementor) {
  if (i == skipNums[0] || i == skipNums[1]) {
    continue;
  }
  else{
    console.log(i);
    }
}
