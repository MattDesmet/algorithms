// This is based on “Flexible Countdown”. The parameter names are not as helpful,
//but the problem is essentially identical; don’t be thrown off!
//Given 4 parameters (param1,param2,param3,param4), print the multiples of param1,
// starting at param2 and extending to param3. One exception: if a multiple is equal
// to param4, then skip (don’t print) that one. Do this using a WHILE loop.

// Example: Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5
// and 17, except for the value 9).

// param1 - print the multiples of this param = 3
// param2 - this is the starting value = 5
// param3 - this is the ending value = 17
// param4 - this is the exception.  Do NOT print if multiple is equal to this param value. = 9

function getMultiples(param1,param2,param3,param4) {
  while (param2 < param3) {
    if (param2 % param1 ==0 && param2 != param4) {
      console.log(param2);
    }
    param2++
  }
}

getMultiples(3,5,17,9)
