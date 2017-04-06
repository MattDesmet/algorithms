// based on earlier 'countdown by fours', given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR loop.
// for (2,9,3), print 9,6,3 on successive lines.

var lowNum = 2
var highNum = 9
var mult = 3

for (var i = highNum; i <= lowNum; i--) {
  if (i % mult == 0) {
    console.log(i);
  }
}
